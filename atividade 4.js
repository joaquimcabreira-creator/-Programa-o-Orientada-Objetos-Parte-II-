from abc import ABC, abstractmethod
import math

class Forma(ABC):
    @abstractmethod
    def calcular_area(self):
        pass

class Retangulo(Forma):
    def __init__(self, largura, altura):
        self.largura = largura
        self.altura = altura

    def calcular_area(self):
        return self.largura * self.altura

class Circulo(Forma):
    def __init__(self, raio):
        self.raio = raio

    def calcular_area(self):
        return math.pi * (self.raio ** 2)

retangulo = Retangulo(4, 5)
circulo = Circulo(3)
print(f"Área do Retângulo: {retangulo.calcular_area()}")
print(f"Área do Círculo: {circulo.calcular_area():.2f}")
