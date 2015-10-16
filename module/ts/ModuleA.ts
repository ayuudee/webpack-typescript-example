import ServiceA = require("../../service/ts/ServiceA.ts");

class ModuleA {

	aGoodModuleSays() {
    return "Woof! " + new ServiceA().aGoodServiceSays();
	}

}
export = ModuleA;
