![Logo](./public/assets/logo.png)

Medinik is a front-end website with basic authentication to display information with next and mui. However, this project requires an outsourced back-end to store the information correctly. I used mongoDB and express to assemble it. You can find an example [here](https://github.com/rapon1kt/Empreews/tree/main/server)
## Installation 
#### 1. Clone github project
Firstly you can clone the repository in your desktop

```bash
mkdir medinik-clone
cd medinik-clone
git clone https://github.com/rapon1kt/medinik.git .
```

#### 2. Setting Environment Variables
Before installing the packages and running the website there are some variables to be set. All of these variables below will be necessary for next-auth to work proprely. You can read more about this topic [here](https://next-auth.js.org/configuration/options#environment-variables).
|  Variables| Type | Value | 
|--|--|--|
|GITHUB_CLIENT_ID | `string` | `random id`
|GITHUB_CLIENT_SECRET | `string`| `random key`
|NEXTAUTH_SECRET| `string`| `you choice`
|NEXTAUTH_URL | `string`| `http://localhost:PORT`

After setting all of them, you can finally start the project.

#### 3. Running
After install the dependencies, run the development command:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Contributing 💡

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update us.

## License
[MIT](https://choosealicense.com/licenses/mit/)
