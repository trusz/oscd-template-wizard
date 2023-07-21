export function bindTargetValue<T>(obj: T, key: keyof T){
    return function( event: Event){
        const target = event.target as HTMLInputElement
        // @ts-ignore
        obj[key] = target.value
    }
}