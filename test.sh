cd /var/lib/tomcat9/webapps/ROOT/user-webIcs/record
sudo ffmpeg -y -i test.gsm -vn -ar 8000 -ac 1 -b:a 192k test.mp3
sudo ffmpeg -y -i E:/kevin/myCode/webIcs/build/web/user-webIcs/record/240611_141415_102_104.gsm -vn -ar 8000 -ac 1 -b:a 192k E:/kevin/myCode/webIcs/build/web/user-webIcs/record/240611_141415_102_104.mp3
sudo ffmpeg -y -i /var/lib/tomcat9/webapps/ROOT/user-webIcs/record/240611_141415_102_104.gsm -vn -ar 8000 -ac 1 -b:a 192k /var/lib/tomcat9/webapps/ROOT/user-webIcs/record/240611_141415_102_104.mp3