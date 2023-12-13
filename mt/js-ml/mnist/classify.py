from __future__ import print_function
import argparse
import torch
import torch.nn as nn
import torch.nn.functional as F
import torch.optim as optim
from torchvision import datasets, transforms
from torch.optim.lr_scheduler import StepLR
from PIL import Image
import matplotlib.pyplot as plt
import numpy as np
from flask import Flask, 



# This class defines the _structure_ of the model.
# The actual (trained) weights are provided from a file
# (e.g. mnist_cnn.pt) and loaded at runtime (see main).
# The weights ultimately live inside each object (e.g. self.conv1,
# self.conv2, self.fc1, etc all each have a set of trainable weights).
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()

        # Our model has 2 layers of 2d-convolutions
        # The first (conv1) inputs 1 channel (grayscale images have 1, color would be 3 for rgb)
        #   and outputs 32 channels. It uses a 3x3 kernel with a stride length of 1
        self.conv1 = nn.Conv2d(1, 32, 3, 1) # 1 channel (b/w), 32 out, 3x3 kernel (for 2d conv), and 1 stride length

        # conv1 will feed into the second layer (conv2)
        # Which inputs all 32 channels, and outputs 64.
        self.conv2 = nn.Conv2d(32, 64, 3, 1)

        # Dropout is helpful during training to avoid overfitting
        # These drop random sets of signals which forces
        # the model to learn general things about the data
        # rather than specific features in the data
        self.dropout1 = nn.Dropout(0.25)
        self.dropout2 = nn.Dropout(0.5)

        # These are fully-connected layers.
        # First, we connect the 64 channels of 12*12 images (sampled from 28x28)
        # from conv2 to 128 nodes, and then those 128 nodes down to 10.
        # The final output layer (10 nodes) encodes what number the classifier
        # thinks it is, by having the corresponding index be high and the others low.
        self.fc1 = nn.Linear(9216, 128)  # 9216 = 64*12*12 (12x12 images)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = self.conv1(x)
        x = F.relu(x)
        x = self.conv2(x)
        x = F.relu(x)
        x = F.max_pool2d(x, 2)
        x = self.dropout1(x)     # These dropouts are present during training, but not testing/eval
        x = torch.flatten(x, 1)
        x = self.fc1(x)
        x = F.relu(x)
        x = self.dropout2(x)    # (They help avoid overfitting to the train set)
        x = self.fc2(x)
        output = F.log_softmax(x, dim=1)
        return output


def main():
    # Parse command line arguments
    parser = argparse.ArgumentParser(description="MNIST classifier")
    parser.add_argument('--model', type=str, default='mnist_cnn.pt',
                        help='input model')
    parser.add_argument('--image', type=str, default=None,
                        help='image to classify')
    parser.add_argument('--verbose', action='store_true', default=False)

    args = parser.parse_args()

    # Load the model weights from file
    model = Net()
    model.load_state_dict(torch.load(args.model))

    # Set the model to evaluating state
    model.eval()

    transform=transforms.Compose([
        transforms.ToTensor(),
        #transforms.Normalize((0.1307,), (0.3081,))
        ])

    # Load image
    im = Image.open(args.image).convert('L')
    tensor = transform(im).unsqueeze(0)

    # Run it through the model
    out = model(tensor)
    val = int(torch.argmax(out))
    print(val)

    if args.verbose:
        l = [t.item() for t in 100*torch.nn.Softmax(dim=1)(out).squeeze()]
        print('\n'.join(['%d %.2f' % (i, d) for i,d in enumerate(l)]))
        #print('\n'.join(['%d %.2f' % (i, d) for i,d in enumerate(100*torch.nn.Softmax(dim=1)(out).item())]))
if __name__ == '__main__':
    main()
