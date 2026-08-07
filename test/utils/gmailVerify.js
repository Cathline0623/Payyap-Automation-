const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

async function verifyMail(receiverMail, subjectText, expectedContent) {

    const auth = await authenticate({
        // keyfilePath: path.join(process.cwd(), "credentials.json"),
        keyfilePath: path.join(__dirname, "..", "credentials.json"),
        scopes: [
            "https://www.googleapis.com/auth/gmail.readonly"
        ]
    });

    const token = await auth.getAccessToken();
    const accessToken = token.token || token;

    const searchUrl =
        `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=` +
        encodeURIComponent(`to:${receiverMail} subject:${subjectText}`);

    const response = await fetch(searchUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error(`Failed to search mail: ${response.status} ${await response.text()}`);
    }

    const data = await response.json();

    if (!data.messages || data.messages.length === 0) {
        console.log("Mail Not Received");
        return false;
    }

    const messageId = data.messages[0].id;

    const messageResponse = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

    if (!messageResponse.ok) {
        throw new Error(`Failed to read mail: ${messageResponse.status} ${await messageResponse.text()}`);
    }

    const message = await messageResponse.json();

    const mailData = JSON.stringify(message);

    if (mailData.includes(expectedContent)) {
        console.log("Mail Content Verified");
        return true;
    }

    console.log("Mail Content Not Matched");
    return false;
}

module.exports = verifyMail;