# **Contributing Guidelines** 📄

This documentation contains a set of guidelines to help you during the contribution process.
We are happy to welcome all the contributions from anyone willing to improve/add new scripts to this project.<br><br>
Thank you for helping out and remember, **no contribution is too small.**
<br>
Please note we have a [code of conduct](CODE_OF_CONDUCT.md) please follow it in all your interactions with the project.

<br>

## **Need some help regarding the basics?🤔**

You can refer to the following articles on basics of Git and Github and also contact the Project Mentors,
in case you are stuck:

- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>

# How to setup the project locally

<ol>
  <li>Fork the Repository</li><br>
  <li>Clone the Repository<br>

```bash
git clone https://github.com/<your-user-name>/ScrapQuest.git
```

  </li><br>
  <li>Go to the Hairify Directory<br>

```bash
cd Hairify
```

  </li>
  </ol>

## Frontend

#### Prerequisites

- Node.js installed on your machine. You can download it [here](https://nodejs.org/).

#### Steps:

<ol>

  <li>Go to the frontend Directory<br>

```bash
cd frontend
```

  </li><br>
  <li>Install the Dependencies<br>

```bash
npm install
```

  </li><br>
  <li>Create a `.env file` and Copy the contents of `.env.sample` to it<br>
  </li><br>
  <li>Start the development server<br>

```bash
npm run dev
```

  </li>

  </ol>

## Backend

#### Prerequisites

- Python and pip installed on your machine. You can download it [here](https://www.python.org/).

#### Steps:

<ol>
  <li>Create a Cloudinary Account and get the credentials</li><br>
  <li>Host Postgres locally or on Cloud, you can also use a docker Image<br><br>

  </li>
  <li>Create a Gemini Account and get the API Key
  </li><br>
  <li>Go to the Backend Directory<br>

```bash
cd Backend
```

  </li><br>
  <li>Install virtualenv<br>

```bash
pip install virtualenv
```

  </li><br>
  <li>Set up virtualenv<br>

```bash
virtualenv env
```

  </li><br>
  <li>Activate virtualenv by doing `.\env\Scripts\activate` (for windows) or `source env/bin/activate` (for linux)
  </li>
  <br>
<li>Install the Requirements

```bash
pip install -r requirements.txt
```

  </li><br>
<li>Create a .env file and add all the variables of .env.sample file with relevant keys
  </li>
  <br>
<li>Install the Requirements

```bash
pip install -r requirements.txt
```

  </li>
  <br>
<li>Start the server

```bash
python manage.py runserver
```

  </li>

  </ol>

<br>

## Open Source Contribution Guidelines

Before contributing, please take a moment to review our [contribution guidelines](CODE_OF_CONDUCT.md) to ensure a smooth and collaborative process.

We appreciate your interest in contributing to Hairify! Let's make it better together.

---
