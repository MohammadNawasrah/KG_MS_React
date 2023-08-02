class HandleObject {
  static changeKeys = (object, keyMappings) => {
    const newObject = {};
    for (const oldKey in object) {
      const newKey = keyMappings[oldKey] || oldKey;
      newObject[newKey] = object[oldKey];
    }
    return newObject;
  };
  static removeKeysFromObject = (objects, keysToRemove) => {
    if (!objects || typeof objects !== "object") {
      return objects;
    }

    if (!Array.isArray(keysToRemove)) {
      throw new Error("keysToRemove should be an array.");
    }
    objects.map(object => {
      keysToRemove.forEach(key => delete object[key]);
    });
    return objects;
  };
}
export default HandleObject;
