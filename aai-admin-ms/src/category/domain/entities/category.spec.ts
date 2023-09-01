import { omit } from "lodash";
import { Category } from "./category";

describe("Category Tests", () => {
  test("constructor of category", () => {
    let category = new Category({ name: "Introdução" });
    let props = omit(category.props, "created_at");

    expect(props).toStrictEqual({
      name: "Introdução",
      description: null,
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Introdução",
      description: "Introdução a Sistemas de Informação",
      is_active: false,
    });
    expect(category.props).toStrictEqual({
      name: "Introdução",
      description: "Introdução a Sistemas de Informação",
      is_active: false,
      created_at: created_at,
    });

    category = new Category({
      name: "Introdução",
      description: "Introdução",
    });
    expect(category.props).toMatchObject({
      name: "Introdução",
      description: "Introdução",
    });

    category = new Category({
      name: "Introdução",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Introdução",
      is_active: true,
    });

    created_at = new Date();
    category = new Category({
      name: "Introdução",
      created_at: created_at,
    });
    expect(category.props).toMatchObject({
      name: "Introdução",
      created_at: created_at,
    });
  });

  test("getter of name prop", () => {
    const category = new Category({ name: "Módulo 1" });
    expect(category.name).toBe("Módulo 1");
  });

  test("getter and setter of description prop", () => {
    let category = new Category({
      name: "Módulo 1",
    });
    expect(category.description).toBeNull();

    category = new Category({
      name: "Módulo 1",
      description: "Módulo de Introdução",
    });
    expect(category.description).toBe("Módulo de Introdução");

    category = new Category({
      name: "Módulo 2",
    });
    category["description"] = "Módulo Docker";
    expect(category.description).toBe("Módulo Docker");

    category["description"] = undefined;
    expect(category.description).toBeNull();

    category["description"] = null;
    expect(category.description).toBeNull();
  });

  test("getter and setter of is_active prop", () => {
    let category = new Category({ name: "Módulo 1" });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: "Módulo 1", is_active: true });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: "Módulo 1", is_active: false });
    expect(category.is_active).toBeFalsy();
  });

  test("getter of created_at prop", () => {
    let category = new Category({ name: "Módulo 1" });
    expect(category.created_at).toBeInstanceOf(Date);

    const createad_at = new Date();
    category = new Category({ name: "Módulo 1", created_at: createad_at });
    expect(category.created_at).toBe(createad_at);
  });
});
