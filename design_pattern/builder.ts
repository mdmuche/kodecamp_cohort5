class Pizza {
  private size: string = "";
  private crust: string = "";
  private toppings: string[] = [];
  private cheese: string = "";
  private sauce: string = "";

  public setSize(size: string): void {
    this.size = size;
  }

  public setCrust(crust: string): void {
    this.crust = crust;
  }

  public setToppngs(topping: string): void {
    this.toppings.push(topping);
  }

  public setCheese(cheese: string): void {
    this.cheese = cheese;
  }

  public setSauce(sauce: string): void {
    this.sauce = sauce;
  }

  public getDescription(): string {
    return `Pizza with ${this.size} size, ${
      this.crust
    } crust, ${this.toppings.join(", ")} toppings, ${this.cheese} cheese and ${
      this.sauce
    } sauce.`;
  }
}

// Builder interface for constructing a pizza
interface PizzaBuilder {
  setSize(size: string): PizzaBuilder;
  setCrust(crust: string): PizzaBuilder;
  setToppings(topping: string): PizzaBuilder;
  setCheese(cheese: string): PizzaBuilder;
  setSauce(sauce: string): PizzaBuilder;
  build(): Pizza;
}

// Concrete builder for constructing a pizza
class ConcreteBuilder implements PizzaBuilder {
  private pizza: Pizza;
  constructor() {
    this.pizza = new Pizza();
  }

  public setSize(size: string): PizzaBuilder {
    this.pizza.setSize(size);
    return this;
  }

  public setCrust(crust: string): PizzaBuilder {
    this.pizza.setCrust(crust);
    return this;
  }

  public setToppings(topping: string): PizzaBuilder {
    this.pizza.setToppngs(topping);
    return this;
  }

  public setCheese(cheese: string): PizzaBuilder {
    this.pizza.setCheese(cheese);
    return this;
  }

  public setSauce(sauce: string): PizzaBuilder {
    this.pizza.setSauce(sauce);
    return this;
  }

  build(): Pizza {
    const result = this.pizza;
    this.pizza = new Pizza(); // resets for next build
    return result;
  }
}

const builder = new ConcreteBuilder();

const customPizza = builder
  .setSize("Large")
  .setCrust("Stuffed")
  .setToppings("Pepperoni")
  .setToppings("Mushrooms")
  .setToppings("Chicken")
  .setCheese("Mozzarella")
  .setSauce("Marinara")
  .build();

console.log(customPizza.getDescription());
