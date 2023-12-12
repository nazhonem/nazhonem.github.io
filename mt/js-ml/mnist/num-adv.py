from PIL import Image
import torch
from torchvision import transforms
import torch.nn.functional as F

from mnist import Net # Only works if in same dir as mnist.py

# Load model & weights for evaluation
model = Net() # Net() defined in mnist.py
model.load_state_dict(torch.load('model.pt'))
model.eval()

# load image 5.png
img = Image.open('5.png')
img_tensor = transforms.ToTensor()(img)    # convert image into tensor - 2d array 0.0-1.0

# compute loss if image is what we want - 9
goal = torch.tensor([9], dtype=torch.long)

# We will repeat the following 250 times
for i in range(250):
    # compute gradients on the input.
    # Otherwise, only the model's would be computed.
    img_tensor.requires_grad = True
    output = model(img_tensor.unsqueeze(0))
    loss = F.nll_loss(output, goal)

    # back propogate & change input image 5.png
    loss.backward()
    dx = img_tensor.grad # dx = how the input should change to make model think its 9

    #  clamp the image tensor to bound it to contain numbers between 0 and 1 so that we can easily convert to an image later
    adversarial_example = img_tensor - dx*0.001
    adversarial_example = torch.clamp(adversarial_example, 0, 1)

    # assign copy adversarial example back to img_tensor to repeat loop
    img_tensor = adversarial_example.detach()

# write image to file
img_out = transforms.ToPILImage()(img_tensor.squeeze())
img_out.save('adversarial.png')
