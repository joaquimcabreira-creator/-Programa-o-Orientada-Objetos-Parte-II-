from abc import ABC, abstractmethod

class Pessoa(ABC):
    def __init__(self, nome, cpf):
        self.nome = nome
        self.__cpf = cpf

    def get_cpf(self):
        return f"***.{self.__cpf[3:6]}.***-{self.__cpf[-2:]}"

    @abstractmethod
    def exercer_funcao(self):
        pass

class Aluno(Pessoa):
    def __init__(self, nome, cpf, curso):
        super().__init__(nome, cpf)
        self.curso = curso

    def exercer_funcao(self):
        return f"{self.nome} está estudando as matérias do curso de {self.curso}."

class Professor(Pessoa):
    def __init__(self, nome, cpf, salario):
        super().__init__(nome, cpf)
        self.salario = salario

    def exercer_funcao(self):
        return f"{self.nome} está ministrando aulas e corrigindo provas."

aluno = Aluno("Ana Clara", "12345678900", "Engenharia de Software")
professor = Professor("Roberto Gomes", "98765432100", 7500.00)

comunidade_escolar = [aluno, professor]

for membro in comunidade_escolar:
    print(f"Nome: {membro.nome} (CPF: {membro.get_cpf()})")
    print(f"Ação: {membro.exercer_funcao()}")
    print("-" * 40)
