import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { calcularPotencia } from "../potencia/potencia";
import { radicales } from "../radicales/radicales";
import { calcularResto } from "../resto/resto";

describe("Ui Addition - Component", () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
//Potencia---------------------------------------------

  it("Should set operator1 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator1"]')
    ).nativeElement;
    inputElement.value = "3.1416";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator1).toEqual(3.1416);
  });

  it("Should set operator2 model through ngModel", async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(
      By.css('input[name="operator2"]')
    ).nativeElement;
    inputElement.value = "2.71";
    inputElement.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(component.operator2).toEqual(2.71);
  });

  it("should calculate the power when I click the modulo-method", () => {
     // Arrange 
    component.operator1 = 2;
    component.operator2 = 3;
    const potencia = fixture.debugElement.query(
      By.css(".potencia-method")
    );
    // Act
    potencia.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.result).toBe(8);
  });

//radicales

  it("should substract operator1 and operator2 when i click the radical-method ", () => {
    component.operator1 = 25;
    component.operator2 = 2;
    let radicalesbutton = fixture.debugElement.query(By.css(".radical-method"));

    expect(radicalesbutton).toBeTruthy();

    // Dispara el evento 'click' en el botón
    radicalesbutton.triggerEventHandler("click", null);

    expect(component.result).toBe(5);
  });

  it("Should render radical in result div", () => {
    component.operator1 = 25;
    component.operator2 = 2;
    component.Radicales();
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".Result"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain("");
  });

  //resto
  
    it('debería calcular el resto cuando se hace clic en el botón calcularResto', () => {
      component.operator1 = 5;
      component.operator2 = 2;
      let calcularRestoButton = fixture.debugElement.query(
        By.css(".resto-method")
      );
      calcularRestoButton.triggerEventHandler("click", null);
      expect(component.result).toBe(1); 
    });
  
    it('debería renderizar el resto en el div de resultado', () => {
      component.operator1 = 50;
      component.operator2 = 5;
      component.Resto();
      fixture.detectChanges();
      let de = fixture.debugElement.query(By.css(".Result"));
      let el: HTMLElement = de.nativeElement;
      expect(el.innerText).toContain("0"); 
    });
//minimo

  it("should multiply operator1 and operator2 when i click the minimo button ", () => {
    component.operator1 = 5;
    component.operator2 = 2;
    let minimoButton = fixture.debugElement.query(
      By.css(".minimo-method")
    );
    minimoButton.triggerEventHandler("click", null);
    expect(component.result).toBe(2);
  });

  it("Should render minimo in result div", () => {
    component.operator1 = 50;
    component.operator2 = 5;
    component.Minimo();
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".Result"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain("");
  });

//logaritmo
it("should multiply operator1 and operator2 when i click the minimo button ", () => {
    component.operator1 = 5;
    component.operator2 = 2;
    let logaritmoButton = fixture.debugElement.query(
      By.css(".logaritmo-method")
    );
    logaritmoButton.triggerEventHandler("click", null);
    expect(component.result).toBe(2);
  });

  it("Should render minimo in result div", () => {
    component.operator1 = 5;
    component.operator2 = 2;
    component.Logaritmo();
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".Result"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toContain("");
  });
});