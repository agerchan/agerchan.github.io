# for i in range(3, 106):
#     print(f"<img src=\"moodboard_pics/JPEG image {i}.jpeg\" height=\"200\">")

import os
directory = 'moodboard_pics'
 
# iterate over files in
# that directory
for filename in os.listdir(directory):
    if filename != ".DS_Store":
        print(f"<img src=\"moodboard_pics/{filename}\" style=\"border:0px;margin:200px\" width=\"450\"><br>")