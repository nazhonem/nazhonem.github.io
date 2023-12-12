const input0 = document.querySelector('#input0')

input0.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const img = document.getElementById('img0');
        const reader = new FileReader();

        reader.onload = function(e) {
            img.onload = () => {
                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
            };
            img.src = e.target.result; // set src to data URL
        };
        reader.readAsDataURL(this.files[0]);
            
        // Send the uploaded image to the server for processing
        const formData = new FormData();
        formData.append('file', this.files[0]);
        console.log(this.files[0]);
        fetch('/images', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(result => {
            alert(`The number is: ${result}`);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error or display error message as needed
        });
    }
});
// document.querySelector('#num1-in').addEventListener('change', function() {
//     if (this.files && this.files[1]) {
//         var img1 = document.getElementById('num1');
//         img1.onload = () => {
//             URL.revokeObjectURL(img1.src);  // no longer needed, free memory
//         }
  
//         img1.src = URL.createObjectURL(this.files[1]); // set src to blob url
//     }
// });