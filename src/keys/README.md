# 生成公钥和私钥
在bash客户端中使用如下命令即可生成公钥和私钥
```bash
# 生成 2048 位 RSA 私钥
openssl genpkey -algorithm RSA -out private.pem -pkeyopt rsa_keygen_bits:2048

# 从私钥生成公钥
openssl rsa -pubout -in private.pem -out public.pem

```
