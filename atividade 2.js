class ContaBancaria:
    def __init__(self):
        self.__saldo = 0

    def depositar(self, valor):
        if valor > 0:
            self.__saldo += valor
            print(f"Depósito de R${valor} realizado com sucesso.")
        else:
            print("Valor inválido para depósito.")

    def sacar(self, valor):
        if 0 < valor <= self.__saldo:
            self.__saldo -= valor
            print(f"Saque de R${valor} realizado com sucesso.")
        else:
            print("Saldo insuficiente ou valor inválido.")

    def consultar_saldo(self):
        return self.__saldo

conta = ContaBancaria()
conta.depositar(100)
conta.sacar(30)
print(f"Saldo atual: R${conta.consultar_saldo()}")
