const formatter = Intl.NumberFormat('pt-BR');

export function formatNumber(value) {
    return formatter.format(value)
};