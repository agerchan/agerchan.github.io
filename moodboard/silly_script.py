# for i in range(3, 106):
#     print(f"<img src=\"moodboard_pics/JPEG image {i}.jpeg\" height=\"200\">")

import os
directory = 'moodboard_pics'
 
# iterate over files in
# that directory
for filename in os.listdir(directory):
    print(f"<img src=\"moodboard_pics/{filename}\" height=\"150\">")