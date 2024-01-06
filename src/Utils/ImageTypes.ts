export const ImageTypes = {

}

/**
 * Find the starting index of the SOS (Start Of Scan) marker. make a copy of
 * data upto the SOS marker. Encrypt the data after the SOS marker. Replace
 * the encrypted data in the copy of the data. Return the copy of the data.
 * 
 * SOS (Start Of Scan) marker:

 Field Size Description

 Marker Identifier 2 bytes 0xff, 0xda identify SOS marker

 Length 2 bytes This must be equal to 6+2*(number of components in scan).

 Number of
 Components in scan 1 byte This must be >= 1 and <=4 (otherwise error), usually 1 or 3

 Each component 2 bytes For each component, read 2 bytes. It contains,
 1 byte Component Id (1=Y, 2=Cb, 3=Cr, 4=I, 5=Q),
 1 byte Huffman table to use :
 bit 0..3 : AC table (0..3)
 bit 4..7 : DC table (0..3)

 Ignorable Bytes 3 bytes We have to skip 3 bytes.

Remarks: The image data (scans) is immediately following the SOS segment. 
 */