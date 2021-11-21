<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/freeton20/ton-addr#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/freeton20/ton-addr/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/freeton20/ton-addr/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/freeton20/ton-addr" />
  </a>
</p>

> Check addresses in EverScale blockchain

### [Homepage](https://github.com/freeton20/ton-addr#readme)

## Install

```sh
npm i ton-addr
```
## Usage

Request:
```js
const {accInfo} = require("ton-addr");
const response = await accInfo("-1:7777777777777777777777777777777777777777777777777777777777777777");
```

Response:
```json
[
    {
        "network": "main.ton.dev",
        "data": [
            {
                "id": "-1:7777777777777777777777777777777777777777777777777777777777777777",
                "balance": "502157321823543539",
                "acc_type_name": "Active",
                "acc_type": 1
            }
        ]
    },
    {
        "network": "net.ton.dev",
        "data": [
            {
                "id": "-1:7777777777777777777777777777777777777777777777777777777777777777",
                "balance": "3225695154000000000",
                "acc_type_name": "Active",
                "acc_type": 1
            }
        ]
    },
    {
        "network": "localhost",
        "data": []
    }
]
```

Request: 
```
const response = await isAddr("-1:efd5a14409a8a129686114fc092525fddd508f1ea56d1b649a3a695d3a5b188c");   
```

Response:
```
true
```
## Author

**freeton20**

* Website: https://t.me/tg2020ukraine
* Github: [@freeton20](https://github.com/freeton20)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/freeton20/ton-addr/issues). You can also take a look at the [contributing guide](https://github.com/freeton20/ton-addr/blob/master/CONTRIBUTING.md).

## Show your support

Give a star if this project helped you!

## License

This project is [MIT](https://github.com/freeton20/ton-addr/blob/master/LICENSE) licensed.
