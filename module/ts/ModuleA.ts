import ServiceA = require("../../service/ts/ServiceA");

class ModuleA {

	aGoodModuleSays() {
    return "Woof! " + new ServiceA().aGoodServiceSays();
	}

}
export = ModuleA;
