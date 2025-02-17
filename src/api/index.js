import { Octokit, App } from "octokit";
const octokit = new Octokit({
  auth: `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`,
});

const {
  data: { login },
} = await octokit.rest.users.getAuthenticated();
console.log("Hello, %s", login);
