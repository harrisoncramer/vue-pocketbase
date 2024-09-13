terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.67.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# Define an EC2 instance resource with specific attributes
resource "aws_instance" "my_ec2" {
  ami                    = "ami-0182f373e66f89c85"
  instance_type          = "t2.micro"
  key_name               = "ec2-key-pair"
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  tags = {
    Name = "MyEC2Instance"
  }
}

# Define a security group to allow access to port 8090
resource "aws_security_group" "ec2_sg" {
  name        = "ec2_sg"
  description = "Allow Internet access to port 8090"

  # Expose port 8090 to incoming traffic
  ingress {
    from_port   = 8090
    to_port     = 8090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow connecting on port 22 for SSH
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow all outbound traffic
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Output the public IP address of the EC2 instance
output "instance_ip_addr" {
  value = aws_instance.my_ec2.public_ip
}

# Output the SSH URL to connect to the EC2 instance
output "ssh_url" {
  value = "ssh -i ~/.ssh/ec2-key-pair.pem ec2-user@${aws_instance.my_ec2.public_dns}"
}
