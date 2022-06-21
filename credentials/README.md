# Credentials Folder

## The purpose of this folder is to store all credentials needed to log into your server and databases. This is important for many reasons. But the two most important reasons is
    1. Grading , servers and databases will be logged into to check code and functionality of application. Not changes will be unless directed and coordinated with the team.
    2. Help. If a class TA or class CTO needs to help a team with an issue, this folder will help facilitate this giving the TA or CTO all needed info AND instructions for logging into your team's server. 


# Below is a list of items required. Missing items will causes points to be deducted from multiple milestone submissions.

1. Server URL or IP
2. SSH username
3. SSH password or key.
    <br> If a ssh key is used please upload the key to the credentials folder.
4. Database URL or IP and port used.
    <br><strong> NOTE THIS DOES NOT MEAN YOUR DATABASE NEEDS A PUBLIC FACING PORT.</strong> But knowing the IP and port number will help with SSH tunneling into the database. The default port is more than sufficient for this class.
5. Database username
6. Database password
7. Database name (basically the name that contains all your tables)
8. Instructions on how to use the above information.

# Credentials

1. Server IP: 34.136.124.189
2. SSH Username: kshitizsareen709
3. SSH Key: This file is included in the credentials folder.
4. Database URL: 34.168.15.4
5. Database Port: 3306
6. Database Username: root
7. Database Password: Ks@1234567890
8. Instructions on how to use the above information:
    **To access the server via SSH**
    
    Please download the ssh_key file given in the credentials folder. Store that file in any path that you would wish to store. 
    Please install an SSH client, if you're using windows, or you can use the terminal if your using Linux to connect to the server via SSH.
    To connect to the server from linux, please use the command.
    
    Please change the file permissions.
    
    chmod 600 <path_to_ssh_key_file>
    
    ssh -i <path_to_ssh_key_file> <ssh_username>@<ssh_url>
    
    In our case the command is:
    
    ssh -i <path_to_ssh_key_file> kshitizsareen709@34.136.124.189
    
    **Note**
    If you face a permissions error while trying to connect, please change the permissions with this command.
    
    chmod 600 <path_to_ssh_key_file>
    
    **To access the Database**
    
    In any client that that can connect to MySQL databases.
    
    Please specify the host as 34.168.15.4.
    
    Please specify the port as 3306.
    
    Please specify the username as root.
    
    Please specify the password as Ks@1234567890.
 

# Most important things to Remember
## These values need to kept update to date throughout the semester. <br>
## <strong>Failure to do so will result it points be deducted from milestone submissions.</strong><br>
## You may store the most of the above in this README.md file. DO NOT Store the SSH key or any keys in this README.md file.
