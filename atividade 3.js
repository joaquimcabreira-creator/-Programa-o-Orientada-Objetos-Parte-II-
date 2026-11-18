class Animal:
    def emitir_som(self):
        pass

class Cachorro(Animal):
    def emitir_som(self):
        return "Au Au!"

class Gato(Animal):
    def emitir_som(self):
        return "Miau!"

animais = [Cachorro(), Gato()]
for animal in animais:
    print(animal.emitir_som())
