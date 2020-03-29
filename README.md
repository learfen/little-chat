# Little Chat
Little Chat is a quick and easy installation tool that integrates easily into any project, using npm.

A "Chat" for your application, which has an independent data base or integrates into your database creating everything necessary to function immediately upon installation.


# Getting Started

### Installation
Download **Little Chat** Usage **NPM**
```javascript
npm i little-chat -S
```

### Configuration
Use the configuration wizard, it will help you through very simple steps to configure.

```javascript
npx little-chat --config
```


---
:white_check_mark: Database settings. <br>
Yes. Then a local database will be installed within the project. and it's ready!
```javascript
> Do you want to use the default database (little_chat.sqlite)? [YES | NO]
```


---
If you answer No. Then we will need some data to set up a table within your database.

```javascript
> WWhat type of database do you use?
[x] MySQL
[ ] PostgreSQL
[ ] MMSQL Server
[ ] MariaDB
```
```javascript
> Enter the Database User
```

```javascript
> Enter the database password
```

```javascript
> Enter the database password
```

```javascript
> Table name for Little-Chat (little_chat)
```
