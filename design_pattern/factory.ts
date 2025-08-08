interface Transport {
  deliver(): string;
  getCost(distance: number): number;
}

class Truck implements Transport {
  deliver(): string {
    return "Delivering by truck on land";
  }

  getCost(distance: number): number {
    return distance * 0.5; // $0.5 per km
  }
}

class Ship implements Transport {
  deliver(): string {
    return "Delivering by ship on sea";
  }

  getCost(distance: number): number {
    return distance * 1.0; // $1.0 per km
  }
}

class Plane implements Transport {
  deliver(): string {
    return "Delivering by plane on air";
  }

  getCost(distance: number): number {
    return distance * 2.0; // $2.0 per km
  }
}

abstract class LogisticCompany {
  abstract createTransport(): Transport;

  public planDelivery(distance: number): string {
    const transport = this.createTransport();
    const cost = transport.getCost(distance);

    return `${transport.deliver()}. Cost: ${cost.toFixed(2)} for ${distance}km`;
  }
}

class RoadLogistics extends LogisticCompany {
  createTransport(): Transport {
    return new Truck();
  }
}

class AirLogistics extends LogisticCompany {
  createTransport(): Transport {
    return new Plane();
  }
}

class SeaLogistics extends LogisticCompany {
  createTransport(): Transport {
    return new Ship();
  }
}

/**
 * Usage example
 */

function clientCode(logistics: LogisticCompany, distance: number): void {
  console.log(`${logistics.planDelivery(distance)}`);
}

const roadlogistics = new RoadLogistics();
const airlogistics = new AirLogistics();
const sealogistics = new SeaLogistics();

clientCode(roadlogistics, 150);
clientCode(airlogistics, 350);
clientCode(sealogistics, 250);
clientCode(airlogistics, 500);
