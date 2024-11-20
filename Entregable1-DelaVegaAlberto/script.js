let balance = 10000;

function showBalance() {
    alert(`Tu saldo actual es: $${balance}`);
}

function transferMoney() {
    let amount = parseFloat(prompt("Ingresa la cantidad a transferir:"));
    if (isNaN(amount) || amount <= 0) {
        alert("Cantidad inválida. Por favor ingresa un número positivo.");
        return;
    }
    if (amount > balance) {
        alert(`Saldo insuficiente. Tu saldo actual es: $${balance}`);
        if (confirm("¿Quieres intentar una nueva transferencia?")) {
            transferMoney();
        }
        return;
    }
    balance -= amount;
    alert(`¡Transferencia exitosa! Tu nuevo saldo es: $${balance}`);
}

function addMoney() {
    let amount = parseFloat(prompt("Ingresa la cantidad a agregar:"));
    if (isNaN(amount) || amount <= 0) {
        alert("Cantidad inválida. Por favor ingresa un número positivo.");
        return;
    }
    balance += amount;
    alert(`¡Saldo agregado exitosamente! Tu nuevo saldo es: $${balance}`);
}

document.getElementById("showBalanceBtn").addEventListener("click", showBalance);
document.getElementById("transferMoneyBtn").addEventListener("click", transferMoney);
document.getElementById("addMoneyBtn").addEventListener("click", addMoney);
