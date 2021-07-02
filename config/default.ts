export default {
  saltWorkFactor: 10,
  mongo: {
    host: process.env.MONGO_HOST || "mongo",
    port: process.env.MONGO_PORT || "27017",
    db: process.env.MONGO_DB || "ecom_ts",
  },
  accessTokenTtl: "30m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgQCdMNvDsr/+2mVH8FusI5w+KI4hXTyYcocmYTntsT5cILv+TPlm
  JEJ+vosPZlAQX9FLMM8mJFWnWK0RGBZevQ66W+5E8rzTaSL6hHC+g2Tnp25azPAD
  RSd2RZiJCvPu0fD4sp8NmgvBig170uVNmziJYObX01Xw5QNWMmMxx+T+AQIDAQAB
  AoGADJFzgNox77aWkoHtUn4mZ/HmK1TBG49MrwznDNI3Ijab0WFmL3yGtIuXosuT
  azu+CD0G0w3kq1SzwcIjR7/mBXAqH/JSFjDy1e3zlag2+THlDcy+3d1HGloDaNMj
  +sLiTwWwpBk0yYg5fR/Eripw4SczBvaqsh9mNGaPF+QqV2ECQQDkkMv9omnbHJig
  g/9dCxFLzRRo1sRU6VbCII0N7GYTfuspgdpdTIJHFK+CJBR/xfLHoy0yKxLyTSoM
  U28qJjcjAkEAsA7ohTlDfrtlXpMRbm4XlfNdwOP20kvSEqAaJ2VwLTJAvFScrHvj
  j23J6LQJE61t8o/4UusfHbAfzMeH1L6aiwJACKf7McXe4G960ElveGSc6RQBO982
  XEjiAkQdU3Oqgf6ChXXngTUOkgaUhwc6x4QFp83kPkwnUYnel8zpHt2HpQJAB18Y
  bTuQj+XYwLT3rd/+LNEbw8/HrdZu3UjGz493uuy3uSrxxGcLiB3Yrl2bY6+HQvi0
  NQSTMPMG4dQY49d3MQJAaip8tGRmMtKt3ZYldmMBTrUmaJ98kfgTaI3527yg1eZG
  gswBubmiwINN8bQzAzd9rUHxweQGju1Zkou16obNGw==
  -----END RSA PRIVATE KEY-----`,
};
