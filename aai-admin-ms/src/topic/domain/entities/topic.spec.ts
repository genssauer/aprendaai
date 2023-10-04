import { omit } from "lodash";
import { Topic } from "./topic";

describe("Topic Tests", () => {
  test("constructor of topic", () => {
    let topic = new Topic({ name: "Introdução" });
    let props = omit(topic.props, "created_at");

    expect(props).toStrictEqual({
      name: "Introdução",
      description: null,
      is_active: true,
    });

    expect(topic.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    topic = new Topic({
      name: "Introdução",
      description: "Introdução a Sistemas de Informação",
      is_active: false,
    });
    expect(topic.props).toStrictEqual({
      name: "Introdução",
      description: "Introdução a Sistemas de Informação",
      is_active: false,
      created_at: created_at,
    });

    topic = new Topic({
      name: "Introdução",
      description: "Introdução",
    });
    expect(topic.props).toMatchObject({
      name: "Introdução",
      description: "Introdução",
    });

    topic = new Topic({
      name: "Introdução",
      is_active: true,
    });
    expect(topic.props).toMatchObject({
      name: "Introdução",
      is_active: true,
    });

    created_at = new Date();
    topic = new Topic({
      name: "Introdução",
      created_at: created_at,
    });
    expect(topic.props).toMatchObject({
      name: "Introdução",
      created_at: created_at,
    });
  });

  test("getter of name prop", () => {
    const topic = new Topic({ name: "Módulo 1" });
    expect(topic.name).toBe("Módulo 1");
  });

  test("getter and setter of description prop", () => {
    let topic = new Topic({
      name: "Módulo 1",
    });
    expect(topic.description).toBeNull();

    topic = new Topic({
      name: "Módulo 1",
      description: "Módulo de Introdução",
    });
    expect(topic.description).toBe("Módulo de Introdução");

    topic = new Topic({
      name: "Módulo 2",
    });
    topic["description"] = "Módulo Docker";
    expect(topic.description).toBe("Módulo Docker");

    topic["description"] = undefined;
    expect(topic.description).toBeNull();

    topic["description"] = null;
    expect(topic.description).toBeNull();
  });

  test("getter and setter of is_active prop", () => {
    let topic = new Topic({ name: "Módulo 1" });
    expect(topic.is_active).toBeTruthy();

    topic = new Topic({ name: "Módulo 1", is_active: true });
    expect(topic.is_active).toBeTruthy();

    topic = new Topic({ name: "Módulo 1", is_active: false });
    expect(topic.is_active).toBeFalsy();
  });

  test("getter of created_at prop", () => {
    let topic = new Topic({ name: "Módulo 1" });
    expect(topic.created_at).toBeInstanceOf(Date);

    const createad_at = new Date();
    topic = new Topic({ name: "Módulo 1", created_at: createad_at });
    expect(topic.created_at).toBe(createad_at);
  });
});
