instalação do raspberry pi
- criar imagem do raspbian lite (sem desktop)
- inicializar (usuario e senha a definir)
- abrir o raspi-config
```
sudo raspi-config
```
- 3 Interface Options
  - I2 SSH Enable
  - I5 I2C Enable

caso precise usar wifi
- 1 System Options
  - S1 Wireless LAN

reiniciar

```
sudo apt-get update
sudo apt-get -y install i2c-tools
sudo apt-get -y install git
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
git clone https://github.com/fradetecnologia/frd-r4-arm.git
cd frd-r4-arm
npm i
sudo cp frd.service /etc/systemd/system
sudo systemctl enable frd.service
sudo systemctl start frd.service
```