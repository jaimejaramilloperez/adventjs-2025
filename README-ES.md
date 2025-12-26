<div align="center">
  <a href="https://adventjs.dev/">
    <img src="https://github.com/user-attachments/assets/8b6e818d-beb3-4ee8-9693-1a04e717c0b9" alt="AdventJS" />
  </a>
</div>

# 🎅🏻 AdventJS 2025 | Soluciones

Mis soluciones a los retos del [AdventJS](https://adventjs.dev/) 2025 creado por [@midudev](https://github.com/midudev/) 👾

## ✨ ¿Qué es el AdventJS?

AdventJS es un calendario de Adviento que se realiza en el mes de diciembre y ofrece una colección de retos de programación en JavaScript. Cada reto tiene una explicación del problema, su solución y sus correspondientes pruebas.

## 🎮 Retos

<table>
  <thead>
    <tr>
      <th align="center" colspan="2">#</th>
      <th align="center">Reto</th>
      <th align="center">Nivel de dificultad</th>
      <th align="center">Solución</th>
      <th align="center">Pruebas unitarias</th>
    </td>
  </thead>
  <tbody>
    <tr>
      <td align="center">01</td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/311052b4-870a-4674-af7c-ee48aeaddb39" alt="reto #01" width="25" height="30" />
      </td>
      <td>
        <a href="/src/challenge-01/README-ES.md"><strong>🎁 Filtrar los regalos defectuosos</strong></a>
      </td>
      <td align="center">
        <img src="https://img.shields.io/badge/Fácil-77A626" alt="fácil" />
      </td>
      <td align="center">
        <a href="/src/challenge-01/index.ts">
          <img src="https://img.shields.io/badge/Código-181717?logo=github&logoColor=fff&color=000" alt="gitHub code badge" />
        </a>
      </td>
      <td align="center">
        <a href="/src/challenge-01/index.test.ts">
          <img src="https://img.shields.io/badge/Pruebas-181717?logo=nodedotjs&logoColor=fff&color=000" alt="nodejs test badge" />
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">02</td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/df99903a-ea93-4d18-abd0-b946e21a6b70" alt="reto #02" width="30" height="30" />
      </td>
      <td>
        <a href="/src/challenge-02/README-ES.md"><strong>🏭 Fábrica de los juguetes</strong></a>
      </td>
      <td align="center">
        <img src="https://img.shields.io/badge/Fácil-77A626" alt="fácil" />
      </td>
      <td align="center">
        <a href="/src/challenge-02/index.ts">
          <img src="https://img.shields.io/badge/Código-181717?logo=github&logoColor=fff&color=000" alt="gitHub code badge" />
        </a>
      </td>
      <td align="center">
        <a href="/src/challenge-02/index.test.ts">
          <img src="https://img.shields.io/badge/Pruebas-181717?logo=nodedotjs&logoColor=fff&color=000" alt="nodejs test badge" />
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">03</td>
      <td align="center">
        <img src="https://github.com/user-attachments/assets/9cbe4eca-8053-4ea1-a6af-b67889c52d8b" alt="reto #03" width="30" height="30" />
      </td>
      <td>
        <a href="/src/challenge-03/README-ES.md"><strong>👶 Ayuda al becario</strong></a>
      </td>
      <td align="center">
        <img src="https://img.shields.io/badge/Fácil-77A626" alt="fácil" />
      </td>
      <td align="center">
        <a href="/src/challenge-03/index.ts">
          <img src="https://img.shields.io/badge/Código-181717?logo=github&logoColor=fff&color=000" alt="gitHub code badge" />
        </a>
      </td>
      <td align="center">
        <a href="/src/challenge-03/index.test.ts">
          <img src="https://img.shields.io/badge/Pruebas-181717?logo=nodedotjs&logoColor=fff&color=000" alt="nodejs test badge" />
        </a>
      </td>
    </tr>
  </tbody>
</table>

## Instalación y Ejecución

### Requisitos Previos

Asegúrate de tener instalado [**Node.js**](https://nodejs.org/) en tu sistema. Puedes verificar si Node.js está instalado ejecutando:

```bash
node -v
```

Esto debería mostrar la versión de Node.js instalada. Si no está instalado, descárgalo desde la [página oficial](https://nodejs.org/).

> [!IMPORTANT]
> La versión mínima de Node.js requerida es **22.18.0**, ya que la eliminación de tipos (type stripping) está habilitada por defecto, lo cual es necesario porque el proyecto ejecuta archivos TypeScript directamente con Node.

Para ejecutar este proyecto en su máquina local, sigue los pasos que se indican a continuación:

1. Clona el repositorio.

```bash
git clone https://github.com/jaimejaramilloperez/adventjs-2025.git
```

2. Navega al directorio del proyecto.

```bash
cd adventjs-2025
```

3. Instala las dependencias (opcional) usando el administrador de paquetes de tu preferencia (npm, pnpm, etc).

```bash
npm install
```

4. Ejecuta todos las pruebass con:

```bash
npm run challenges
```

O ejecuta las pruebas de cada reto con el siguiente comando reemplazando `{número del reto}` con el número correspondiente:

```bash
npm run challenge{número del reto}
```

Por ejemplo:

```bash
npm run challenge1 # Ejecuta las pruebas del reto 1
npm run challenge5 # Ejecuta las pruebas del reto 5
npm run challenge12 # Ejecuta las pruebas del reto 12
npm run challenge25 # Ejecuta las pruebas del reto 25
```
