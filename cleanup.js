const fs = require('fs');
const path = require('path');

const githubWorkspace = process.env.GITHUB_WORKSPACE;

try {
  
  const tmp = fs.readdirSync(githubWorkspace);

  tmp.forEach(file => {
    const completeFilePath = path.join(githubWorkspace, file);
    fs.rmSync(completeFilePath, { recursive: true, force: true });
    console.log(`${completeFilePath} deleted`);
  });

} catch (error) {
  console.log(error)
}
