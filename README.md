U ovom readme dokumentu se nalaze upute za instalaciju i pokretanje servera.
Upute podrazumijevaju da je git već instaliran na sustav.

## Instalacija WSL-a
Za pokretanje Dockera potreban je WSL 2 (Windows Subsystem for Linux), koji se može instalirati u Windowsu.
Pobrinite se da je uključena virtualizacija u BIOS-u sustava te da je u Windows značajkama uključen Hyper-V (ili Windows Hypervisor platform ako Hyper-V nije dostupan)

Naredba za CMD
```
wsl install
```
## Instalacija Dockera
Preuzmite [Docker desktop](https://www.docker.com/products/docker-desktop/) za Windows i prođite kroz proces instalacije.
Nakon instalacije pokrenite
```
docker --version
```
kako bi ste se uvjerili da je Docker uspješno instaliran.

## Postavljanje projekta
Klonirajte git repositorij ovog projekta u željenu mapu s naredbom
```
git clone htttps://github.com/saracivano/contxt.git .
```

Izradite Docker image iz Dockerfilea projekta s naredbom
```
docker build -t (ime) . 
```
(zamijenite ime s imenom po želji)

## Pokretanje servera
Pokrenite server pomoću naredbe
```
docker run -p 8000:8000 (ime)
```

Server bi trebao biti aktivan na adresi [localhost:8000](localhost:8000)
