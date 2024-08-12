import AsyncStorage  from '@react-native-async-storage/async-storage'


export enum STORAGED_KEYS {
    token = 'token',
}

export async function save(key: string, value: string) {
    await AsyncStorage.setItem(key,value)
}

export async function getItem(key: string) {
    const result = await AsyncStorage.getItem(key);
    return result;
}

export async function removeItem(key: string) {
    await AsyncStorage.removeItem(key);
}

export async function clearStorage() {
    await AsyncStorage.clear();
}