### ByteForms

<h5>Instruction:</h5>

Please read all rules available in rule-set in ```/rules``` directory in workspaces.

> If you have turbo install in your system then run command dirctly without `npx` otherwise use `npx` to execute turbo commands.

<h5>Installation:</h5>

First step is to install necessary dependencies.
For installing dependencies run below command.

```
npm install --save
```

<h5>Configuration:</h5>

Add necessary enviroment variables in each workspace.

```
|-- apps/
    |-- www/.env
```

<h5>Start:</h5>

For getting instant output of code in production environment run below command.

```
npx turbo start
```

<h5>Build:</h5>

For getting build of all workspaces run below command

> Note: Although `npx turbo run start` command do this job directly.

```
npx turbo run build
```

<h5>Development:</h5>

> Note: This section of instructions is only for developer.
> Run below command for running all workspaces on development environment at `./` root.

```
npx turbo dev
```
