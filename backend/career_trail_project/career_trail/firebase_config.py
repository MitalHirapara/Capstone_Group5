import firebase_admin
from firebase_admin import credentials, storage

cred = credentials.Certificate("career_trail/firebase/capstone-firebase-adminsdk.json")
firebase_admin.initialize_app(cred, {
    "storageBucket": "capstone-d5867.appspot.com"
})

def upload_to_firebase(file, file_name):
    bucket = storage.bucket()
    blob = bucket.blob(file_name)
    blob.upload_from_file(file)
    blob.make_public()
    return blob.public_url
