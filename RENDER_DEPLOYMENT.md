# Railway Deployment Notes

## Environment Variables for Railway Backend

Add these environment variables in the Railway dashboard for the backend service:

```
EMAIL_USER=automotive794@gmail.com
EMAIL_PASS=your_app_password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
PORT=3001
FRONTEND_URL=https://your-vercel-app.vercel.app
```

## Steps to Add Environment Variables in Railway:

1. Go to the Railway dashboard
2. Select your backend service
3. Open the Variables tab
4. Add each variable from the list above
5. Save the changes
6. Redeploy the service

## Important Notes:

- The backend uses port 465 with SSL for Gmail SMTP
- Debug logging is enabled to troubleshoot email issues
- Timeouts are set to 60 seconds to handle connection delays
- Ensure 2-Step Verification is enabled for the Gmail account
- The App Password must be valid
- Frontend URL is configured for CORS via the Railway backend

## Frontend Configuration:

The frontend is deployed on Vercel and should call the Railway backend endpoint.
