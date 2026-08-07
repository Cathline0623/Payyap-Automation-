const path = require("path");
const { authenticate } = require("@google-cloud/local-auth");

async function main() {
    const auth = await authenticate({
        keyfilePath: path.join(__dirname, "credentials.json"),
        scopes: [
            "https://www.googleapis.com/auth/gmail.readonly"
        ]
    });

    const token = await auth.getAccessToken();

    // console.log("Access Token:");
    // console.log(token.token || token);

    const res = await fetch(
        "https://gmail.googleapis.com/gmail/v1/users/me/profile",
        {
            headers: {
                Authorization: `Bearer ${token.token || token}`
            }
        }
    );

    console.log("Status:", res.status);

    const body = await res.text();
    console.log(body);
}

main().catch(console.error);