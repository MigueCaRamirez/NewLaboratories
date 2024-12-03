
numero = int(input("Introduce un número: "))
if numero % 2 == 0:
    print("El número es par.")
else:
    print("El número es impar.")


numeros = [1, 2, 3, 4, 5]
for n in numeros:
    print(f"El cuadrado de {n} es {n**2}")


entrada = ""
while entrada != "0":
    entrada = input("Introduce un número (0 para salir): ")
    print(f"Has introducido: {entrada}")
