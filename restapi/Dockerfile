# syntax=docker/dockerfile:1

FROM python:3.9-slim-buster

WORKDIR /restapi

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

RUN apt-get update 
RUN apt-get install ffmpeg libsm6 libxext6 -y

COPY . .

RUN ls -la /restapi/model/trained_tuned_ext2

CMD ["python", "api.py", "--host=0.0.0.0"]

