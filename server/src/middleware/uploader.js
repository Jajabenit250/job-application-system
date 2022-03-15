const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();


aws.config.setPromisesDependency();
aws.config.update({
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	region: 'ca-central-1',
});
const s3 = new aws.S3();
export const upload = multer({
	storage: multerS3({
		s3,
		bucket: process.env.S3_BUCKET,
		ACL: 'public-read',
		contentType: multerS3.AUTO_CONTENT_TYPE,
		key(req, file, cb) {
			cb(null, `/` + file.originalname);
		},
	}),
});
export default upload;
