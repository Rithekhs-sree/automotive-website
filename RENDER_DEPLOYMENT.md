# Render Deployment Instructions

## Environment Variables for Render Backend

Add these environment variables in your Render dashboard for the backend service:

```
EMAIL_USER=automotive794@gmail.com
EMAIL_PASS=kfvhhqprwaotakkh
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
PORT=3001
```

## Steps to Add Environment Variables in Render:

1. Go to your Render dashboard
2. Select your backend service (automotive-website-backend)
3. Click on "Environment" tab
4. Add each variable from the list above
5. Click "Save Changes"
6. Deploy again to apply the changes

## Important Notes:

- The backend uses port 587 with STARTTLS for Gmail SMTP (more reliable for cloud deployments)
- Timeouts are set to 30 seconds to handle connection delays
- The backend will ALWAYS return success (200) even if email fails
- Failed email attempts are logged to server console for manual review
- This ensures users never see error messages and have a smooth experience
- Make sure 2-Step Verification is enabled for automotive794@gmail.com
- The App Password (kfvhhqprwaotakkh) must be valid
- After adding environment variables, you need to redeploy the service

## Frontend Configuration:

The frontend is already configured to call:
```
https://automotive-website-z3ds.onrender.com/api/contact
```

The frontend will always show a success message to users even if the backend has issues, to provide a smooth user experience.
