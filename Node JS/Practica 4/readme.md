dependencies:
- "@prisma/client": "^5.19.1",
- "bcrypt": "^5.1.1",
- "dotenv": "^16.4.5",
- "express": "^4.21.0",
- "jsonwebtoken": "^9.0.2",
- "typescript": "^5.6.2"

devDependencies:
- "@types/bcrypt": "^5.0.2",
- "@types/express": "^4.17.21",
- "@types/jsonwebtoken": "^9.0.7",
- "@types/node": "^22.5.5",
- "prisma": "^5.19.1",
- "rimraf": "^6.0.1",
- "ts-node-dev": "^2.0.0"


tsnd --respawn --clear src/app.ts es como un nodemon para el ts

npx prisma init para iniciar prisma
luego npx prisma generate para obtener el model user y denuevo npx prisma generate
despues docker-compose up -d

despues npzx 