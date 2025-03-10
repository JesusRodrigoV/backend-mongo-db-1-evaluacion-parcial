# Primera evaluacion parcial Tecnologias Web II

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Bun.js](https://bun.sh/) (última versión)
- [MongoDB](https://www.mongodb.com/) (última versión)

### Instalación de Bun

#### Para Linux/macOS

```bash
curl -fsSL https://bun.sh/install | bash
```

#### Para Windows

Opción 1 (usando npm):

```sh
npm install -g bun
```

Opción 2 (usando PowerShell):

```powershell
powershell -c "irm bun.sh/install.ps1|iex"
```

## Instalación del proyecto

1. Clonar el repositorio:

```sh
git clone https://github.com/JesusRodrigoV/backend-mongo-db-1-evaluacion-parcial.git
cd backend-mongo-db-1-evaluacion-parcial
```

2. Instalar las dependencias del proyecto:

```sh
bun install
```

3. Iniciar el servidor de pruebas

```sh
bun run start
```

## Estructura del proyecto

```
Backend-Tecno-Web-2/
├── src/
│   ├── controllers/    # Controladores de la aplicación
│   ├── models/         # Modelos de datos
│   ├── routes/         # Rutas de la API
│   ├── config/         # Configuraciones
│   └── index.js        # Punto de entrada a la aplicaciónn
├── bun.lock           # Archivo de bloqueo de dependencias
├── package.json       # Archivo de configuración de npm
└── README.md          # Archivo de documentación
```
