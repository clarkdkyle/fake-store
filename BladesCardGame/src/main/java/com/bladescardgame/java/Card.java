package com.bladescardgame.java;

public enum Card {
    ONE(1, "One"), TWO(2, "Two"), THREE(3, "Three"), FOUR(4, "Four"),
    FIVE(5, "Five"), SIX(6, "Six"), SEVEN(7, "Seven"), BOLT(1, "Bolt"), MIRROR(1, "Mirror");


    private final int value;
    private final String valueString;
    Card(int value, String valueString) {
        this.value = value;
        this.valueString = valueString;
    }

    public int getValue(int j) {
        return this.value;
    }

    public String getValueString() {
        return valueString;
    }


}

