import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UiComponent } from "./ui.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { calcularPotencia } from "../potencia/potencia";
import { radicales } from "../radicales/radicales";
import { calcularResto } from "../resto/resto";

//Potencia---------------------------------------------
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

  it("Should call potencia method", () => {
    let result = 0;
    result = calcularPotencia(2, 2);
    expect(result).toBe(4);
  });

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
    component.operator1 = 2;
    component.operator2 = 3;
    const modulo = fixture.debugElement.query(
      By.css(".potencia-method")
    );
    modulo.triggerEventHandler("click", null);
    fixture.detectChanges();
    expect(component.result).toBe(8);
  });

//radicales

  it("should substract operator1 and operator2 when i click the radical-method ", () => {
    component.operator1 = 25;
    component.operator2 = 2;
    let maximoButton = fixture.debugElement.query(By.css(".radical-method"));

    // Verifica que se haya encontrado el botón
    expect(maximoButton).toBeTruthy();

    // Dispara el evento 'click' en el botón
    maximoButton.triggerEventHandler("click", null);

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

  describe('calcularResto function', () => {
    it('debería calcular el resto correctamente', () => {
      const resultado = calcularResto(5, 2);
      expect(resultado).toBe(1); 
    });
  
    it('debería setear el modelo operator1 a través de ngModel', async () => {
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
  
    it('debería setear el modelo operator2 a través de ngModel', async () => {
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
  });
  
});