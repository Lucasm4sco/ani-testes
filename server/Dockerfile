FROM python:alpine

WORKDIR /app

COPY . /app/

RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]