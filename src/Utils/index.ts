export const imageTypes ={
  "image/avif": {
    "headerBytes": 12,
    "source": "iana",
    "compressible": false,
    "extensions": ["avif"]
  },
  "image/bmp": {
    "headerBytes": 14,
    "source": "iana",
    "compressible": true,
    "extensions": ["bmp","dib"]
  },
  "image/gif": {
    "headerBytes": 6,
    "source": "iana",
    "compressible": false,
    "extensions": ["gif"]
  },
  "image/jpeg": {
    "headerBytes": 8,
    "source": "iana",
    "compressible": false,
    "extensions": ["jpeg","jpg","jpe"]
  },
  "image/png": {
    "headerBytes": 8,
    "source": "iana",
    "compressible": false,
    "extensions": ["png"]
  },
  "image/svg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["svg","svgz"]
  },
  "image/t38": {
    "source": "iana",
    "extensions": ["t38"]
  },
  "image/tiff": {
    "headerBytes": 8,
    "source": "iana",
    "compressible": false,
    "extensions": ["tif","tiff"]
  },
  "image/webp": {
    "source": "iana",
    "extensions": ["webp"]
  },
  "image/wmf": {
    "source": "iana",
    "extensions": ["wmf"]
  },
}