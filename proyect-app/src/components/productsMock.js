const products = [
    { id: "1", name:"ASUS NVIDIA GEFORCE GTX 1650 OC PHOENIX 4GB DDR5", category:"grafica",description:`-Motor gráfico:  NVIDIA® GeForce GTX 1650
    -Bus: PCI Express 3.0
    -OpenGL®4.6: Sí
    -Memoria de video: DDR5 de 4 GB
    -Reloj del motor: Modo OC - 1710 MHz
    -Núcleo CUDA: 896
    -Velocidad de memoria: 8002 Mhz
    -interfaz de memoria: 128 bits
    -Resolución máxima digital: 7680 x 4320
    -Interfaz:
    Sí x 1 (DVI-D nativo)
    Sí x 1 (HDMI nativo 2.0b)
    Sí x 1 (DisplatPort 1.4 nativo)
    -Compatibilidad con HDCP Sí (2.2)
    -Soporte de pantalla máximo: 3
    -Soporte NVlink / Crossfire: No
    -Dimensiones: 19 x 11 x3.8 Cm
    -PSU recomendada: 300W
    -Espacio: 2 ranuras`, price:"218999", stock:"4"},
    { id:"2", name:"ASUS ROG STRIX NVIDIA GEFORCE RTX 4070TI 12GB GAMING GDDR6X", category:"grafica", description:`-Motor Gráfico: NVIDIA® GeForce RTXTM 4070 Ti
    -Bús: PCI Express 4.0
    -OpenGL: OpenGL® 4.6
    -Memoria de Video: 12GB GDDR6X
    -Frecuencia del Reloj:
    Modo OC: 2640 MHz Modo predeterminado: 2610 MHz (reloj de impulso)
    Núcleo CUDA:7680
    -Velocidad de Memoria:21 Gb/s
    -Memoria de Interface: 192 bits
    -Resolución: Resolución máxima digital 7680 x 4320
    -Interfaz: 
    Sí x 2 (HDMI 2.1a nativo)
    Sí x 3 (DisplayPort nativo 1.4a)
    Compatibilidad con HDCP Sí (2.3)
    -Soporte Máximo de Pantalla: 4
    -Dimensiones: 336x150x63mm
    -PSU Recomendada: 750W
    -Conectores de Energía: 1x16 pines
    -SINCRONIZACIÓN DEL AURA: ARGB`, price:"1399999", stock:"1" },
    { id:"3", name:"ASUS NVIDIA GEFORCE GTX 1660 SUPER TUF GAMING OC 6GB DUAL", category:"grafica", description:`-Motor gráfico: NVIDIA® GeForce® GTX 1660 SUPER™
    -Bús: PCI Express 3.0
    -OpenGL: OpenGL®4.6
    -Memoria de video: 6GB GDDR6
    -Reloj del motor:
    Modo OC: 1845 MHz (reloj de aumento)
    Modo de juego (predeterminado): reloj de aumento de GPU: 1815 MHz, reloj base de GPU: 1530 MHz
    -Núcleo CUDA: 1408
    -Velocidad de memoria: 14002 MHz
    -interfaz de memoria: 192 bits
    -Resolución: Resolución máxima digital 7680 x 4320
    -Interfaz:
    Sí x 1 (DVI-D nativo)
    Sí x 1 (Nativo HDMI 2.0b)
    Sí x 1 (Nativo DisplayPort 1.4)
    Compatibilidad con HDCP Sí (2.2)
    -Soporte máximo de pantalla: 3
    -Dimensiones: 20.6 x 12.4 x4.6 Centímetro
    -Fuente de alimentación recomendada: 450W
    -Conectores de alimentación: 1x8 pines`, price:"339999", stock:"7"},
    { id:"4", name:"GIGABYTE NVIDIA GEFORCE RTX 4080 EAGLE 16GB GDDR6X", category:"grafica",description:`-Procesamiento de gráficos: GeForce RTX™ 4080
    -Reloj de núcleo: 2505 MHz
    -CUDA® Cores: 9728
    -Tipo de memoria: GDDR6X
    -Bus de memoria: 256 bits
    -Bús: PCI-E 4.0x16
    -Resolución máxima digital: 7680x4320
    -Vista múltiple: 4
    -Tamaño de la tarjeta: Largo=342 Ancho=150 Alto=70 mm
    -Fuente de alimentación recomendada: 850W
    -Conectores de alimentación: 16 pines * 1
    -Output: 
    DisplayPort 1.4a *3
    HDMI 2.1 *1`, price:"1899999", stock:"1"},
    { id:"5", name:"POWERCOLOR RX550 LOW PROFILE 4GB GDDR5", category:"grafica",description:`Motor gráfico: AXRX 550 4GBD5-HLE
    Memoria de vídeo: GDDR5 DE 4 GB
    Procesador de flujo: 512 Unidades
    Reloj del motor (OC): hasta 1071 MHz con boost
    Reloj de memoria: 1500MHz x4 (6,0 Gbps)
    Interfaz de memoria: 128 bits
    Compatibilidad con DirectX®: 12
    Bus Estándar: PCIE 3.0
    Conectores de pantalla estándar: SL DVI-D/ HDMI
    Resolución máxima
    DVI: 2560x1600
    DisplayPort: 4096x2160
    HDMI: 4096x2160
    Especificaciones de potencia + Dimensiones de la placa
    Dimensiones de la placa: 181*120*20m m
    Requisito mínimo de potencia del sistema (W): 2406`, price:"189999", stock:"8" },
    { id:"6", name:"MONITOR 19 PHILIPS 193V5LHSB2/55 HDMI HD 60HZ", category:"monitores", description:`LCD TFT
    Tipo de retroiluminación Sistema W-LED
    Tamaño de panel 18,5 pulg / 47 cm
    Área de visualización efectiva 409,8 (H) x 230,4 (V)
    Relación de aspecto 16:9
    Resolución óptima 1366 x 768 a 60 Hz
    Tiempo de respuesta (estándar) 5 ms
    Brillo 200 cd/m²
    Relación de contraste (estándar) 700:1
    Píxeles 0,30 x 0,30 mm
    Ángulo de visualización 90º (alto) / 65º (ancho)a C/R > 10
    Colores de pantalla 16,7 M
    Frecuencia de escaneo 30-83 kHz (horizontal)/56-76 Hz (vertical)
    Señal de entrada VGA (analógica)
    HDMI (digital, HDCP)
    Entrada de sincronización Sincronización separada`, price:"69990", stock:"3" },
    { id:"7", name:"MONITOR 20 LED LG 20MK400H-B HDMI HD", category:"monitores", description:`-Tamaño (Pulgada) 19.5" / 49.4cm 
    -Tipo panel TN 
    -Gama de Color (CIE 1931) 72%
    -Profundidad de Color (Nº colores) 16.7M colors
    -Tamaño Pixel (mm) 0.3177 x 0.307
    -Formato/Aspecto 16:9
    -Resolución 1366 x 768
    -Brillo 200cd/m2 (Típ.) 160cd/m2 (Min.)
    -Tiempo de Respuesta (GTG) 5ms
    -Ángulo de Visión (CR≥10) 90/65 (CR≥10)`, price:"71999", stock:"4"},
    { id:"8", name:"MONITOR 27 NOBLEX 91MK27X7100 VA FHD 75HZ", category:"monitores", description:`-Pantalla: 450x613x255mm
    -Resolución: 1920x1080
    -Brillo: 250cd/m2
    -Conexión WiFi: Si
    -Netflix: No
    -Youtube: No
    -Entrada VGA: Si
    -Smart: No
    -3D: No
    -Contraste: 4000
    -TDA: No
    -Panel: VA`, price:"109999", stock:"2"},
    { id:"9", name:"MOUSE GENIUS DX 120 USB 1000 DPI", category:"mouse", description:`Interfaz USB
    Unidad de sensor Óptico
    Resolución (DPI) 1000
    Cantidad de botones Tres (izquierda, derecha y central con desplazamiento)
    Longitud de cable de alimentación 1.5m`, price:"7999", stock:"10"},
    { id:"10", name:"MOUSE INALAMBRICO REDRAGON M690 MIRACLE", category:"mouse", description:`-Tipo: inalámbrico de 2,4 Ghz
    -Voltaje: 1,5 V
    -Corriente: 15 mA
    -USB: USB 2.0 y 3.0
    -Fuente de alimentación: 1 x AA (no incluido)
    -Botones: 7 botones programables
    -Tasa de sondeo: 125 HZ ~ 500 HZ
    -Sistema de seguimiento: Óptico
    -Nivel de 6 DPI: 800/1200 /1600/2400/3200/4800 DPI ajustable
    -Compatible: Windows XP/Vista/Win7/Win8/Win10/2000, etc.
    -Tamaño: 4,94*1,61*2,9 pulgadas
    -Peso: 120g (sin batería)`, price:"16999", stock:"4"},
    { id:"11", name:"MOUSE LOGITECH G300S GAMING OPTICAL", category:"mouse", description:`ESPECIFICACIONES FÍSICAS
    Altura: 115 mm
    Anchura: 72 mm
    Profundidad: 37 mm
    Peso: 82 g, sólo mouse
    Longitud de cable: 2,10 m
    SEGUIMIENTO
    Resolución: 200 – 2.500 dpi
    Sin suavizado/aceleración/filtros
    Aceleración máx.: >20 G2Pruebas realizadas sobre alfombrilla de mouse Logitech G240 para juegos
    Velocidad máx.: >150 ips3Pruebas realizadas sobre alfombrilla de mouse Logitech G240 para juegos
    RESPUESTA
    Formato de datos USB: 16 bits/eje
    Velocidad de respuesta USB: 1000 Hz (1 ms)
    Microprocesador: 32 bits ARM
    DURABILIDAD
    Botones principales: 10 millones de clicks
    Pies PTFE: > 250 kilómetros
    OTRAS FUNCIONES
    Memoria integrada: 3 perfiles
    Zona de 7 colores ajustables
    Cable no trenzado
    REQUISITOS DEL SISTEMA
    Windows® 7 o posteriores
    macOS® 10.11 o posteriores
    Chrome OS™
    Conexión a Internet para Logitech G HUB (opcional)
    Puerto USB`, price:"18990", stock:"4"},
    { id:"12", name:"MOUSE REDRAGON M808 STORM PRO", category:"mouse", description:`Botones Programables: 8
    TIpo de agarre: Palm, Claw, Fingertip
    Orientación: Derecho
    Cable: Con cable mallado de 1.8 m
    Conexión: inalámbrica 2.4 Ghz con Dongle USB/ Cableado USB
    Modelo Sensor: Pixart PMW 3335 óptico
    Interruptores: Huano, 20 millones de clicks
    Retroiluminación: Si, RGB Chroma
    DPI Mínimo: 100
    DPI Máximo: 16000
    Frecuencia de respuesta: 125 Hz / 1000 Hz
    Peso: 96.5gr
    Dimensiones: 12.7x6.6x4 cm
    Sistema de Pesas:No
    Software: Si
    Contenido de la caja: Manual de uso, Sticker Redragon, Receptor inalámbrico, cable USB-C a USB-A.`, price:"24990", stock:"3"},
    { id:"13", name:"MOUSE LOGITECH G G502X WHITE", category:"mouse", description:`-Dimensiones:
    Altura: 131,4 mm
    Ancho: 41,1 mm
    Profundidad: 79,2 mm
    -Sensor: HERO 25K
    -Resolución: 100 – 25.600 dpi
    -Aceleración máx.: >40G2
    -Velocidad máx.: >400 IPS2 
    -Requisitos: Puerto USB, Acceso a Internet para descarga de software opcional
    -Compatibilidad: Windows® 10 o posterior. macOS 10.14 o posterior
    -General:
    Hasta 5 perfiles de memoria integrada
    Pies de PTFE
    13 controles programables`, price:"70990", stock:"1"},
    { id:"14", name:"TECLADO HDC KB113 USB", category:"teclado", description:`TECLAS: 113
    DISEÑO: español
    TECLAS MULTIMEDIA: 9
    VIDA DE TECLAS: 10 millones de veces`, price:"7890", stock:"12"},
    { id:"15", name:"TECLADO PHILIPS G401 MIXED LED MECANICO", category:"teclado", description:`* Teclado mecanico Philips G401
    * Ergonomico con 104 Teclas
    * Teclado retroiluminado Rgb (gran variedad de ondas de color y combinaciones)
    * Anti-ghosting de tecla completa para entradas rápidas y complejas
    * Las pulsaciones de teclas rápidas y complejas exigen un rendimiento avanzado.
    * Con la sustitución completa de teclas N, cada tecla se registra de forma independiente sin confusión, de modo que cada pulsación de tecla se registra correctamente independientemente de cuántas otras teclas se estén presionando o manteniendo presionadas.
    * Diseño resistente al agua para limpieza y derrames ocasionales.
    * La vida puede ser complicada. Con este teclado resistente al agua, los derrames
    o salpicaduras ocasionales no son un problema.
    * Estos teclados están hechos para durar.
    * Cinco macros dedicados adicionales teclas (Y, U, I, O, P)
    * Compatible con : Microsoft Windows 2000,ME, XP, Vista y superior, Linux, IOS
    * Conector usb
    * Dimensiones (Largo x Profundo x Alto)
    43,8 x 13,2 x 3,85 cms`, price:"17990", stock:"5"},
    { id:"16", name:"TECLADO REDRAGON MITRA K551 RGB MECANICO ESP", category:"teclado", description:`Iluminación RGB
    Porque no todo es tecnicismo, también nos importa la estética: el Mitra K552 posee retroiluminación real LED RGB con 16.8 millones de nítidos colores para transformar el teclado en TU teclado.
    - Tipo de interruptores: Mecánicos
    - Tipo Switch: Redragon Red, Lineal sin click audible , fuerza de actuación 45 gr 
    - Teclas Multimedia: Si, a tráves de tecla FN
    - Teclas Macro: No
    - Bloqueo Tecla Windows: Si
    - Tamaño teclado: Full Size
    - Reposa Muñecas: No
    - Retroiluminado: Si, RGB Chroma
    - Cable: Goma, reforzado. Soporta 12kg y 10000 flexiones. USB enchapado en oro y filtro anti interferencias
    - Matriz: 100% Anti-Ghosting con Full Key Rollover
    - Construcción: Plástico ABS reforzado y placa de acero
    - Antisalpicaduras: Si
    - Idiomas Disponibles: Español, Ingles (según disponibilidad)
    - Peso: 1.30 kg
    - Dimensiones: 43.5x12.3x3.7 cm
    - Extras: Teclas moldeadas por inyección láser de doble disparo, keypicker, switches intercambiables (Solo MITRA)
    - Software: Si (Versión en español únicamente).`, price:"34990", stock:"4"},
    { id:"17", name:"TECLADO LOGITECH G G213 RETROILUMINADO MULTIMEDIA", category:"teclado", description:`FUNCIONES
    USO SIMULTÁNEO DE TECLAS PARA MAYOR RENDIMIENTO
    Cuatro veces más rápido que los teclados estándar
    Cada tecla de G213 está optimizada para mejorar la experiencia táctil y ofrecer una respuesta superrápida, hasta 4 veces superior a la de los teclados estándar. La matriz de prevención de efecto fantasma para juegos está programada para dominar el control al pulsar simultáneamente varias teclas de juego.
    ZONAS DE ILUMINACIÓN RGB BRILLANTES Y NÍTIDAS
    Elige entre aproximadamente 16,8 millones de colores
    Un teclado moderno con cinco zonas de iluminación individuales con un espectro de aproximadamente 16,8 millones de colores. Cambia colores según una configuración o un juego específico, o simplemente para usar tus favoritos. El bajo índice de fuga luminosa alrededor de las teclas significa que pasa más luz por las letras, con lo que cada tecla es más brillante y más fácil de encontrar. 
    Más información
    *Se requiere Logitech Gaming Software para personalizar ajustes de perfil
    RESISTENTE A SALPICADURAS Y DURADERO
    Diseñado para la vida de verdad
    Los accidentes ocurren, por eso G213 Prodigy se ha creado para la vida de verdad. No importa si estás jugando o trabajando, G213 Prodigy lo aguanta todo, con una construcción duradera que resiste salpicaduras*, migas y suciedad para que los accidentes del mundo real no se interpongan en el camino.
    *Sometido a pruebas con derrames de 60 ml de líquido
    REPOSAMANOS INTEGRADO Y PATAS AJUSTABLES
    Juega más tiempo
    El ajuste de ángulo en dos niveles te permite colocar el teclado en la posición ideal, mientras el reposamanos integrado alivia la incomodidad o la fatiga, para que puedas seguir jugando cómodamente ronda tras ronda.
    CONTROLES MULTIMEDIA ESPECÍFICOS
    Reproducir, pausa, omitir, ajustar
    Controla tu pista de fondo sin detener la acción. G213 posee controles multimedia específicos que se pueden usar para reproducir, poner en pausa y silenciar música y videos al instante. Ajusta el volumen o salta a la siguiente canción con sólo pulsar un botón.
    PERSONALIZA CON LOGITECH GAMING SOFTWARE
    Simplifica tu juego
    Logitech Gaming Software permite personalizar G213, para un uso más práctico y exclusivo. Puedes configurar la iluminación RGB, ahorrar tiempo asignando varias funciones a ciertas teclas y mucho más.
    ESPECIFICACIONES TÉCNICAS
    Resistente a salpicaduras: 
    Sometido a pruebas con derrames de 60 ml de líquido
    Tipo de conexión: USB 2.0
    Protocolo USB: USB 2.0
    Velocidad USB: Máxima
    Indicadores luminosos (LED): Sí
    Pantalla LCD: No
    Retroiluminación: RGB
    Longitud de cable (alimentación/carga): 1,8 m
    Idioma Español
    Especificaciones físicas
    Altura: 218 mm
    Anchura: 452 mm
    Profundidad: 33 mm
    Peso: 1000 g`, price:"94990", stock:"2"},
    { id:"18", name:"AURICULAR REDRAGON H120 ARES C/MICROFONO S/ADAPTADOR", category:"auriculares", description:` Tipo de salida: Stereo
    Tipo de copa: Circumaurales: Este tipo de auriculares se coloca rodeando completamente la oreja.
    Material Diadema: Plástica, recubierta de tela suave y duradera.
    Vibración: No
    Frecuencia de Respuesta 20 - 20k Hz
    Impedancia: 32 Ohm
    Diametro del diafragma: 40 mm con imanes de neodimio
    Sensibilidad: 113 dB
    Retroiluminación: No
    Tipo de cable: 2 m Engomado de alta resistencia. Con control de Volumen
    Conectores Conectores 3.5 mm enchapados en oro para audio y micrófono
    Peso: 275 g
    Software: No
    Impedancia: 2.2k Ohm
    Sensibilidad: -45 dB+/-5 dB
    Tipo de microfono y captación: De brazo tipo boom, rebatible. Captación direccional y reducción de ruido.`, price:"12990", stock:"6"},
    {id:"19", name:"AURICULAR REDRAGON LAMIA 2 RGB 7.1", category:"auriculares", description:`Sonido envolvente virtual de 7.1 canales
    Ayuda a localizar rápidamente la posición del enemigo cerca de ti en el campo de batalla.
    Amplio rango de compatibilidad
    Funciona con PC, PS3, PS4.
    Micrófono incorporado
    Permite chatear con manos libres a través de un dispositivo compatible.
    Comodidad sólida
    Las almohadillas diseñadas con un estilo de cobertura total aseguran que sus orejas no se aplasten, el relleno de espuma de memoria mantiene su oreja lejos de la disnea.
    Controles de auriculares
    Incluye silencio y volumen.
    AURICULAR
    - Tipo de salida: 7.1 Virtual
    -Tipo de copa: Circumaurales: Este tipo de auriculares se coloca rodeando completamente la oreja. Tacto suave y con aislamiento pasivo
    -Material Diadema: Metálica, flexible. Integrada a la estructura
    -Vibración: No
    -Frecuencia de Respuesta: 20 - 20k Hz- Impedancia: 32 Ohm
    -Diámetro del diafragma: 40 mm con imanes de neodimio
    -Sensibilidad: 117 dB
    -Retroiluminación: Anillo RGB
    -Tipo de cable: 2 m Engomado de alta resistencia.
    -Conectores: Conector USB 2.0
    -Peso: 360 g
    -Software: No
    MICRÓFONO
    -Impedancia: 2.2k Ohm
    -Sensibilidad: -40 dB+/-3 dB
    -Tipo de micrófono y captación: Omnidireccional, Flexible, Integrado a la copa`, price:"32990", stock:"2"},
    { id:"20", name:"AURICULAR LOGITECH G G335 BLACK", category:"auriculares", description:`-Dimensiones
    Longitud: 189 mm
    Anchura: 180 mm
    Profundidad: 79 mm
    Peso: 240 g (con cable incluido)
    -Conector
    Toma de audio de 3,5 mm
    -Audífono
    Transductor: 40 mm
    Respuesta de frecuencia: 20 Hz-20 kHz
    Impedancia: 36 Ohms Sensibilidad: 87,5 dB SPL/mW
    -Micrófono (varilla)
    Patrón de captación de micrófono: Cardioide (unidireccional)
    Respuesta de frecuencia: 100 Hz - 10 kHz
    -Contenido
    Audífonos G335 con micrófono y cable para juegos
    Divisor para PC para micrófonos y tomas de audífonos (divisor en Y)
    Documentación del usuario`, price:"70990", stock:"2"},
    { id:"21", name:"MICROFONO REDRAGON BLAZAR GM300", category:"microfonos", description:`Material: Metal
    Unidad de micrófono: Condensador cardioide de 16 mm
    Dirección: Unidireccional
    Sensibilidad: -45 ± 3dB
    Impedancia de salida: ≤2.2kΩ
    Respuesta de frecuencia: 20Hz-20kHz
    Conexión: USB Plug and Play
    Longitud del cable: 1.7 m
    Indicador Led: Anillo color rojo/Indica mute
    Botones de control: Integrado/controla volumen y mute`, price:"45990", stock:"3"},
    { id:"22", name:"MICROFONO HYPERX QUADCAST S PC PS4", category:"microfonos", description:`-Consumo de energía: 5 V 220 mA (luz blanca)
    -Frecuencia de muestreo/velocidad de bits: 48 kHz/16 bits
    -Tipo de condensador: Tres condensadores de 14 mm
    -Patrones polares: Estéreo, Omnidireccional, Cardioide, Bidireccional
    -Respuesta de frecuencia :20 Hz - 20 kHz
    -Sensibilidad: -36 dB (1 V/Pa a 1 kHz)
    -Longitud del cable: 3 m
    -Peso Micrófono: 254 g
    -Montura para golpes y soporte: 360 g
    -Total con cable USB: 710 g
    -Iluminación RGB: (16 777 216 colores)
    -Efectos de luz: 2 zonas2
    -Compatible con MAC: Si`, price:"154990", stock:"1"}
]

export const getProducts = () => {

    return new Promise((resolve, reject) => {
        if(products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        } else {
            reject("no hay productos")
        }
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            const product = products.find( product => product.id === id)

            setTimeout(() => { 
                if(!product) {
                    reject(`Disculpa, no se encuentra el producto ${id}`)
                }
                resolve(product)
             }, 2000)
        } else {
            reject("Nos quedamos sin productos :(")
        }
    })

}