interface ILongque {
  /**
   * Harmony API version.
   *
   * @since 1
   */
  version: number

  /**
   * Create a delegate object for `underlyingObject` or make the `initObject` a delegate for `underlyingObject`.
   *
   * @param underlyingObject The underlying object to be delegated.
   * @param initObject Optional initial delegate object.
   * @param propertyFilterFlags Optional property filter flags, must use predefined filter flags.
   * @return If no error throwed, returns the new created delegate object or the `initObject`.
   *
   * @since 1
   */
  createDelegate: (underlyingObject: object, initObject?: object, propertyFilterFlags?: number) => object

  /**
   * The filter flag for `createDelegate`, skip all properties in prototype chain of `underlyingObject`.
   *
   * @since 1
   */
  SKIP_PROTOTYPE_CHAIN: 1

  /**
   * The filter flag for `createDelegate`, skip all properties that starts with '_'.
   *
   * @since 1
   */
  SKIP_PREFIX_UNDERSCORE: 2

  /**
   * The filter flag for `createDelegate`, skip all properties that starts with '$'.
   *
   * @since 1
   */
  SKIP_PREFIX_DOLLAR: 4

  /**
   * The filter flag for `createDelegate`, skip the 'constructor' property.
   *
   * @since 1
   */
  SKIP_CONSTRUCTOR: 8
}

interface Window {
  __Longque__: ILongque
}
