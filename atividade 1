class Pessoa:
    def __init__(self, nome):
        self.nome = nome

class Aluno(Pessoa):
    def __init__(self, nome, matricula):
        super().__init__(nome)
        self.matricula = matricula

class Professor(Pessoa):
    def __init__(self, nome, disciplina):
        super().__init__(nome)
        self.disciplina = disciplina

aluno = Aluno("João", "202301")
prof = Professor("Carlos", "Matemática")
print(f"{aluno.nome} - Matrícula: {aluno.matricula}")
print(f"{prof.nome} - Disciplina: {prof.disciplina}")
