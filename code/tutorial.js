(() => {
  // node_modules/d3-array/src/ascending.js
  function ascending(a, b) {
    return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  // node_modules/d3-array/src/descending.js
  function descending(a, b) {
    return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
  }

  // node_modules/d3-array/src/bisector.js
  function bisector(f) {
    let compare1, compare2, delta;
    if (f.length !== 2) {
      compare1 = ascending;
      compare2 = (d, x) => ascending(f(d), x);
      delta = (d, x) => f(d) - x;
    } else {
      compare1 = f === ascending || f === descending ? f : zero;
      compare2 = f;
      delta = f;
    }
    function left(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x) < 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function right(a, x, lo = 0, hi = a.length) {
      if (lo < hi) {
        if (compare1(x, x) !== 0)
          return hi;
        do {
          const mid = lo + hi >>> 1;
          if (compare2(a[mid], x) <= 0)
            lo = mid + 1;
          else
            hi = mid;
        } while (lo < hi);
      }
      return lo;
    }
    function center(a, x, lo = 0, hi = a.length) {
      const i = left(a, x, lo, hi - 1);
      return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
    }
    return { left, center, right };
  }
  function zero() {
    return 0;
  }

  // node_modules/d3-array/src/number.js
  function number(x) {
    return x === null ? NaN : +x;
  }

  // node_modules/d3-array/src/bisect.js
  var ascendingBisect = bisector(ascending);
  var bisectRight = ascendingBisect.right;
  var bisectLeft = ascendingBisect.left;
  var bisectCenter = bisector(number).center;
  var bisect_default = bisectRight;

  // node_modules/d3-array/src/ticks.js
  var e10 = Math.sqrt(50);
  var e5 = Math.sqrt(10);
  var e2 = Math.sqrt(2);
  function tickSpec(start2, stop, count) {
    const step = (stop - start2) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
    let i1, i2, inc;
    if (power < 0) {
      inc = Math.pow(10, -power) / factor;
      i1 = Math.round(start2 * inc);
      i2 = Math.round(stop * inc);
      if (i1 / inc < start2)
        ++i1;
      if (i2 / inc > stop)
        --i2;
      inc = -inc;
    } else {
      inc = Math.pow(10, power) * factor;
      i1 = Math.round(start2 / inc);
      i2 = Math.round(stop / inc);
      if (i1 * inc < start2)
        ++i1;
      if (i2 * inc > stop)
        --i2;
    }
    if (i2 < i1 && 0.5 <= count && count < 2)
      return tickSpec(start2, stop, count * 2);
    return [i1, i2, inc];
  }
  function ticks(start2, stop, count) {
    stop = +stop, start2 = +start2, count = +count;
    if (!(count > 0))
      return [];
    if (start2 === stop)
      return [start2];
    const reverse = stop < start2, [i1, i2, inc] = reverse ? tickSpec(stop, start2, count) : tickSpec(start2, stop, count);
    if (!(i2 >= i1))
      return [];
    const n = i2 - i1 + 1, ticks2 = new Array(n);
    if (reverse) {
      if (inc < 0)
        for (let i = 0; i < n; ++i)
          ticks2[i] = (i2 - i) / -inc;
      else
        for (let i = 0; i < n; ++i)
          ticks2[i] = (i2 - i) * inc;
    } else {
      if (inc < 0)
        for (let i = 0; i < n; ++i)
          ticks2[i] = (i1 + i) / -inc;
      else
        for (let i = 0; i < n; ++i)
          ticks2[i] = (i1 + i) * inc;
    }
    return ticks2;
  }
  function tickIncrement(start2, stop, count) {
    stop = +stop, start2 = +start2, count = +count;
    return tickSpec(start2, stop, count)[2];
  }
  function tickStep(start2, stop, count) {
    stop = +stop, start2 = +start2, count = +count;
    const reverse = stop < start2, inc = reverse ? tickIncrement(stop, start2, count) : tickIncrement(start2, stop, count);
    return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
  }

  // node_modules/d3-dispatch/src/dispatch.js
  var noop = { value: () => {
  } };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t))
        throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t))
        throw new Error("unknown type: " + t);
      return { type: t, name };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function(typename, callback) {
      var _ = this._, T = parseTypenames(typename + "", _), t, i = -1, n = T.length;
      if (arguments.length < 2) {
        while (++i < n)
          if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name)))
            return t;
        return;
      }
      if (callback != null && typeof callback !== "function")
        throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type)
          _[t] = set(_[t], typename.name, callback);
        else if (callback == null)
          for (t in _)
            _[t] = set(_[t], typename.name, null);
      }
      return this;
    },
    copy: function() {
      var copy2 = {}, _ = this._;
      for (var t in _)
        copy2[t] = _[t].slice();
      return new Dispatch(copy2);
    },
    call: function(type2, that) {
      if ((n = arguments.length - 2) > 0)
        for (var args = new Array(n), i = 0, n, t; i < n; ++i)
          args[i] = arguments[i + 2];
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    },
    apply: function(type2, that, args) {
      if (!this._.hasOwnProperty(type2))
        throw new Error("unknown type: " + type2);
      for (var t = this._[type2], i = 0, n = t.length; i < n; ++i)
        t[i].value.apply(that, args);
    }
  };
  function get(type2, name) {
    for (var i = 0, n = type2.length, c; i < n; ++i) {
      if ((c = type2[i]).name === name) {
        return c.value;
      }
    }
  }
  function set(type2, name, callback) {
    for (var i = 0, n = type2.length; i < n; ++i) {
      if (type2[i].name === name) {
        type2[i] = noop, type2 = type2.slice(0, i).concat(type2.slice(i + 1));
        break;
      }
    }
    if (callback != null)
      type2.push({ name, value: callback });
    return type2;
  }
  var dispatch_default = dispatch;

  // node_modules/d3-selection/src/namespaces.js
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces_default = {
    svg: "http://www.w3.org/2000/svg",
    xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };

  // node_modules/d3-selection/src/namespace.js
  function namespace_default(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns")
      name = name.slice(i + 1);
    return namespaces_default.hasOwnProperty(prefix) ? { space: namespaces_default[prefix], local: name } : name;
  }

  // node_modules/d3-selection/src/creator.js
  function creatorInherit(name) {
    return function() {
      var document2 = this.ownerDocument, uri = this.namespaceURI;
      return uri === xhtml && document2.documentElement.namespaceURI === xhtml ? document2.createElement(name) : document2.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function() {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator_default(name) {
    var fullname = namespace_default(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }

  // node_modules/d3-selection/src/selector.js
  function none() {
  }
  function selector_default(selector) {
    return selector == null ? none : function() {
      return this.querySelector(selector);
    };
  }

  // node_modules/d3-selection/src/selection/select.js
  function select_default(select) {
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/array.js
  function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }

  // node_modules/d3-selection/src/selectorAll.js
  function empty() {
    return [];
  }
  function selectorAll_default(selector) {
    return selector == null ? empty : function() {
      return this.querySelectorAll(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectAll.js
  function arrayAll(select) {
    return function() {
      return array(select.apply(this, arguments));
    };
  }
  function selectAll_default(select) {
    if (typeof select === "function")
      select = arrayAll(select);
    else
      select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection(subgroups, parents);
  }

  // node_modules/d3-selection/src/matcher.js
  function matcher_default(selector) {
    return function() {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function(node) {
      return node.matches(selector);
    };
  }

  // node_modules/d3-selection/src/selection/selectChild.js
  var find = Array.prototype.find;
  function childFind(match) {
    return function() {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selectChild_default(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/selectChildren.js
  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function() {
      return filter.call(this.children, match);
    };
  }
  function selectChildren_default(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }

  // node_modules/d3-selection/src/selection/filter.js
  function filter_default(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection(subgroups, this._parents);
  }

  // node_modules/d3-selection/src/selection/sparse.js
  function sparse_default(update) {
    return new Array(update.length);
  }

  // node_modules/d3-selection/src/selection/enter.js
  function enter_default() {
    return new Selection(this._enter || this._groups.map(sparse_default), this._parents);
  }
  function EnterNode(parent, datum2) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum2;
  }
  EnterNode.prototype = {
    constructor: EnterNode,
    appendChild: function(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };

  // node_modules/d3-selection/src/constant.js
  function constant_default(x) {
    return function() {
      return x;
    };
  }

  // node_modules/d3-selection/src/selection/data.js
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    }
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    }
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function data_default(value, key) {
    if (!arguments.length)
      return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function")
      value = constant_default(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1)
            i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength)
            ;
          previous._next = next || null;
        }
      }
    }
    update = new Selection(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  }
  function arraylike(data) {
    return typeof data === "object" && "length" in data ? data : Array.from(data);
  }

  // node_modules/d3-selection/src/selection/exit.js
  function exit_default() {
    return new Selection(this._exit || this._groups.map(sparse_default), this._parents);
  }

  // node_modules/d3-selection/src/selection/join.js
  function join_default(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter)
        enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update)
        update = update.selection();
    }
    if (onexit == null)
      exit.remove();
    else
      onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }

  // node_modules/d3-selection/src/selection/merge.js
  function merge_default(context) {
    var selection2 = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection(merges, this._parents);
  }

  // node_modules/d3-selection/src/selection/order.js
  function order_default() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4)
            next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/sort.js
  function sort_default(compare) {
    if (!compare)
      compare = ascending2;
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection(sortgroups, this._parents).order();
  }
  function ascending2(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
  }

  // node_modules/d3-selection/src/selection/call.js
  function call_default() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
  }

  // node_modules/d3-selection/src/selection/nodes.js
  function nodes_default() {
    return Array.from(this);
  }

  // node_modules/d3-selection/src/selection/node.js
  function node_default() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node)
          return node;
      }
    }
    return null;
  }

  // node_modules/d3-selection/src/selection/size.js
  function size_default() {
    let size = 0;
    for (const node of this)
      ++size;
    return size;
  }

  // node_modules/d3-selection/src/selection/empty.js
  function empty_default() {
    return !this.node();
  }

  // node_modules/d3-selection/src/selection/each.js
  function each_default(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i])
          callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }

  // node_modules/d3-selection/src/selection/attr.js
  function attrRemove(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, value) {
    return function() {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS(fullname, value) {
    return function() {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttribute(name);
      else
        this.setAttribute(name, v);
    };
  }
  function attrFunctionNS(fullname, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.removeAttributeNS(fullname.space, fullname.local);
      else
        this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function attr_default(name, value) {
    var fullname = namespace_default(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS : attrRemove : typeof value === "function" ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
  }

  // node_modules/d3-selection/src/window.js
  function window_default(node) {
    return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
  }

  // node_modules/d3-selection/src/selection/style.js
  function styleRemove(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, value, priority) {
    return function() {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction(name, value, priority) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        this.style.removeProperty(name);
      else
        this.style.setProperty(name, v, priority);
    };
  }
  function style_default(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove : typeof value === "function" ? styleFunction : styleConstant)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
  }

  // node_modules/d3-selection/src/selection/property.js
  function propertyRemove(name) {
    return function() {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function() {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (v == null)
        delete this[name];
      else
        this[name] = v;
    };
  }
  function property_default(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }

  // node_modules/d3-selection/src/selection/classed.js
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.add(names[i]);
  }
  function classedRemove(node, names) {
    var list = classList(node), i = -1, n = names.length;
    while (++i < n)
      list.remove(names[i]);
  }
  function classedTrue(names) {
    return function() {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function() {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function() {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function classed_default(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()), i = -1, n = names.length;
      while (++i < n)
        if (!list.contains(names[i]))
          return false;
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }

  // node_modules/d3-selection/src/selection/text.js
  function textRemove() {
    this.textContent = "";
  }
  function textConstant(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function text_default(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction : textConstant)(value)) : this.node().textContent;
  }

  // node_modules/d3-selection/src/selection/html.js
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function() {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function() {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function html_default(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }

  // node_modules/d3-selection/src/selection/raise.js
  function raise() {
    if (this.nextSibling)
      this.parentNode.appendChild(this);
  }
  function raise_default() {
    return this.each(raise);
  }

  // node_modules/d3-selection/src/selection/lower.js
  function lower() {
    if (this.previousSibling)
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function lower_default() {
    return this.each(lower);
  }

  // node_modules/d3-selection/src/selection/append.js
  function append_default(name) {
    var create2 = typeof name === "function" ? name : creator_default(name);
    return this.select(function() {
      return this.appendChild(create2.apply(this, arguments));
    });
  }

  // node_modules/d3-selection/src/selection/insert.js
  function constantNull() {
    return null;
  }
  function insert_default(name, before) {
    var create2 = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
    return this.select(function() {
      return this.insertBefore(create2.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }

  // node_modules/d3-selection/src/selection/remove.js
  function remove() {
    var parent = this.parentNode;
    if (parent)
      parent.removeChild(this);
  }
  function remove_default() {
    return this.each(remove);
  }

  // node_modules/d3-selection/src/selection/clone.js
  function selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function clone_default(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }

  // node_modules/d3-selection/src/selection/datum.js
  function datum_default(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }

  // node_modules/d3-selection/src/selection/on.js
  function contextListener(listener) {
    return function(event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames2(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
      var name = "", i = t.indexOf(".");
      if (i >= 0)
        name = t.slice(i + 1), t = t.slice(0, i);
      return { type: t, name };
    });
  }
  function onRemove(typename) {
    return function() {
      var on = this.__on;
      if (!on)
        return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i)
        on.length = i;
      else
        delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function() {
      var on = this.__on, o, listener = contextListener(value);
      if (on)
        for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
      this.addEventListener(typename.type, listener, options);
      o = { type: typename.type, name: typename.name, value, listener, options };
      if (!on)
        this.__on = [o];
      else
        on.push(o);
    };
  }
  function on_default(typename, value, options) {
    var typenames = parseTypenames2(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on)
        for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i)
      this.each(on(typenames[i], value, options));
    return this;
  }

  // node_modules/d3-selection/src/selection/dispatch.js
  function dispatchEvent(node, type2, params) {
    var window2 = window_default(node), event = window2.CustomEvent;
    if (typeof event === "function") {
      event = new event(type2, params);
    } else {
      event = window2.document.createEvent("Event");
      if (params)
        event.initEvent(type2, params.bubbles, params.cancelable), event.detail = params.detail;
      else
        event.initEvent(type2, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params);
    };
  }
  function dispatchFunction(type2, params) {
    return function() {
      return dispatchEvent(this, type2, params.apply(this, arguments));
    };
  }
  function dispatch_default2(type2, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type2, params));
  }

  // node_modules/d3-selection/src/selection/iterator.js
  function* iterator_default() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i])
          yield node;
      }
    }
  }

  // node_modules/d3-selection/src/selection/index.js
  var root = [null];
  function Selection(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection.prototype = selection.prototype = {
    constructor: Selection,
    select: select_default,
    selectAll: selectAll_default,
    selectChild: selectChild_default,
    selectChildren: selectChildren_default,
    filter: filter_default,
    data: data_default,
    enter: enter_default,
    exit: exit_default,
    join: join_default,
    merge: merge_default,
    selection: selection_selection,
    order: order_default,
    sort: sort_default,
    call: call_default,
    nodes: nodes_default,
    node: node_default,
    size: size_default,
    empty: empty_default,
    each: each_default,
    attr: attr_default,
    style: style_default,
    property: property_default,
    classed: classed_default,
    text: text_default,
    html: html_default,
    raise: raise_default,
    lower: lower_default,
    append: append_default,
    insert: insert_default,
    remove: remove_default,
    clone: clone_default,
    datum: datum_default,
    on: on_default,
    dispatch: dispatch_default2,
    [Symbol.iterator]: iterator_default
  };
  var selection_default = selection;

  // node_modules/d3-selection/src/select.js
  function select_default2(selector) {
    return typeof selector === "string" ? new Selection([[document.querySelector(selector)]], [document.documentElement]) : new Selection([[selector]], root);
  }

  // node_modules/d3-selection/src/sourceEvent.js
  function sourceEvent_default(event) {
    let sourceEvent;
    while (sourceEvent = event.sourceEvent)
      event = sourceEvent;
    return event;
  }

  // node_modules/d3-selection/src/pointer.js
  function pointer_default(event, node) {
    event = sourceEvent_default(event);
    if (node === void 0)
      node = event.currentTarget;
    if (node) {
      var svg = node.ownerSVGElement || node;
      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [point.x, point.y];
      }
      if (node.getBoundingClientRect) {
        var rect = node.getBoundingClientRect();
        return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
      }
    }
    return [event.pageX, event.pageY];
  }

  // node_modules/d3-drag/src/noevent.js
  var nonpassivecapture = { capture: true, passive: false };
  function noevent_default(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-drag/src/nodrag.js
  function nodrag_default(view) {
    var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", noevent_default, nonpassivecapture);
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", noevent_default, nonpassivecapture);
    } else {
      root2.__noselect = root2.style.MozUserSelect;
      root2.style.MozUserSelect = "none";
    }
  }
  function yesdrag(view, noclick) {
    var root2 = view.document.documentElement, selection2 = select_default2(view).on("dragstart.drag", null);
    if (noclick) {
      selection2.on("click.drag", noevent_default, nonpassivecapture);
      setTimeout(function() {
        selection2.on("click.drag", null);
      }, 0);
    }
    if ("onselectstart" in root2) {
      selection2.on("selectstart.drag", null);
    } else {
      root2.style.MozUserSelect = root2.__noselect;
      delete root2.__noselect;
    }
  }

  // node_modules/d3-color/src/define.js
  function define_default(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition)
      prototype[key] = definition[key];
    return prototype;
  }

  // node_modules/d3-color/src/color.js
  function Color() {
  }
  var darker = 0.7;
  var brighter = 1 / darker;
  var reI = "\\s*([+-]?\\d+)\\s*";
  var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
  var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
  var reHex = /^#([0-9a-f]{3,8})$/;
  var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
  var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
  var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
  var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
  var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
  var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
  var named = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  };
  define_default(Color, color, {
    copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: color_formatHex,
    formatHex8: color_formatHex8,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
  });
  function color_formatHex() {
    return this.rgb().formatHex();
  }
  function color_formatHex8() {
    return this.rgb().formatHex8();
  }
  function color_formatHsl() {
    return hslConvert(this).formatHsl();
  }
  function color_formatRgb() {
    return this.rgb().formatRgb();
  }
  function color(format2) {
    var m, l;
    format2 = (format2 + "").trim().toLowerCase();
    return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
  }
  function rgba(r, g, b, a) {
    if (a <= 0)
      r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color))
      o = color(o);
    if (!o)
      return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define_default(Rgb, rgb, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb() {
      return this;
    },
    clamp() {
      return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
    },
    displayable() {
      return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatHex8: rgb_formatHex8,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
  }
  function rgb_formatHex8() {
    return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
  }
  function rgb_formatRgb() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
  }
  function clampa(opacity) {
    return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
  }
  function clampi(value) {
    return Math.max(0, Math.min(255, Math.round(value) || 0));
  }
  function hex(value) {
    value = clampi(value);
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s, l, a) {
    if (a <= 0)
      h = s = l = NaN;
    else if (l <= 0 || l >= 1)
      h = s = NaN;
    else if (s <= 0)
      h = NaN;
    return new Hsl(h, s, l, a);
  }
  function hslConvert(o) {
    if (o instanceof Hsl)
      return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color))
      o = color(o);
    if (!o)
      return new Hsl();
    if (o instanceof Hsl)
      return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min2 = Math.min(r, g, b), max2 = Math.max(r, g, b), h = NaN, s = max2 - min2, l = (max2 + min2) / 2;
    if (s) {
      if (r === max2)
        h = (g - b) / s + (g < b) * 6;
      else if (g === max2)
        h = (b - r) / s + 2;
      else
        h = (r - g) / s + 4;
      s /= l < 0.5 ? max2 + min2 : 2 - max2 - min2;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define_default(Hsl, hsl, extend(Color, {
    brighter(k) {
      k = k == null ? brighter : Math.pow(brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker(k) {
      k = k == null ? darker : Math.pow(darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb() {
      var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
      return new Rgb(
        hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb(h, m1, m2),
        hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    clamp() {
      return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
    },
    displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
    },
    formatHsl() {
      const a = clampa(this.opacity);
      return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
    }
  }));
  function clamph(value) {
    value = (value || 0) % 360;
    return value < 0 ? value + 360 : value;
  }
  function clampt(value) {
    return Math.max(0, Math.min(1, value || 0));
  }
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }

  // node_modules/d3-interpolate/src/basis.js
  function basis(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
  }
  function basis_default(values) {
    var n = values.length - 1;
    return function(t) {
      var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/basisClosed.js
  function basisClosed_default(values) {
    var n = values.length;
    return function(t) {
      var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
      return basis((t - i / n) * n, v0, v1, v2, v3);
    };
  }

  // node_modules/d3-interpolate/src/constant.js
  var constant_default2 = (x) => () => x;

  // node_modules/d3-interpolate/src/color.js
  function linear(a, d) {
    return function(t) {
      return a + t * d;
    };
  }
  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
      return Math.pow(a + t * b, y);
    };
  }
  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function(a, b) {
      return b - a ? exponential(a, b, y) : constant_default2(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear(a, d) : constant_default2(isNaN(a) ? b : a);
  }

  // node_modules/d3-interpolate/src/rgb.js
  var rgb_default = function rgbGamma(y) {
    var color2 = gamma(y);
    function rgb2(start2, end) {
      var r = color2((start2 = rgb(start2)).r, (end = rgb(end)).r), g = color2(start2.g, end.g), b = color2(start2.b, end.b), opacity = nogamma(start2.opacity, end.opacity);
      return function(t) {
        start2.r = r(t);
        start2.g = g(t);
        start2.b = b(t);
        start2.opacity = opacity(t);
        return start2 + "";
      };
    }
    rgb2.gamma = rgbGamma;
    return rgb2;
  }(1);
  function rgbSpline(spline) {
    return function(colors) {
      var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color2;
      for (i = 0; i < n; ++i) {
        color2 = rgb(colors[i]);
        r[i] = color2.r || 0;
        g[i] = color2.g || 0;
        b[i] = color2.b || 0;
      }
      r = spline(r);
      g = spline(g);
      b = spline(b);
      color2.opacity = 1;
      return function(t) {
        color2.r = r(t);
        color2.g = g(t);
        color2.b = b(t);
        return color2 + "";
      };
    };
  }
  var rgbBasis = rgbSpline(basis_default);
  var rgbBasisClosed = rgbSpline(basisClosed_default);

  // node_modules/d3-interpolate/src/numberArray.js
  function numberArray_default(a, b) {
    if (!b)
      b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
      for (i = 0; i < n; ++i)
        c[i] = a[i] * (1 - t) + b[i] * t;
      return c;
    };
  }
  function isNumberArray(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
  }

  // node_modules/d3-interpolate/src/array.js
  function genericArray(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for (i = 0; i < na; ++i)
      x[i] = value_default(a[i], b[i]);
    for (; i < nb; ++i)
      c[i] = b[i];
    return function(t) {
      for (i = 0; i < na; ++i)
        c[i] = x[i](t);
      return c;
    };
  }

  // node_modules/d3-interpolate/src/date.js
  function date_default(a, b) {
    var d = /* @__PURE__ */ new Date();
    return a = +a, b = +b, function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    };
  }

  // node_modules/d3-interpolate/src/number.js
  function number_default(a, b) {
    return a = +a, b = +b, function(t) {
      return a * (1 - t) + b * t;
    };
  }

  // node_modules/d3-interpolate/src/object.js
  function object_default(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object")
      a = {};
    if (b === null || typeof b !== "object")
      b = {};
    for (k in b) {
      if (k in a) {
        i[k] = value_default(a[k], b[k]);
      } else {
        c[k] = b[k];
      }
    }
    return function(t) {
      for (k in i)
        c[k] = i[k](t);
      return c;
    };
  }

  // node_modules/d3-interpolate/src/string.js
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
  var reB = new RegExp(reA.source, "g");
  function zero2(b) {
    return function() {
      return b;
    };
  }
  function one(b) {
    return function(t) {
      return b(t) + "";
    };
  }
  function string_default(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
    a = a + "", b = b + "";
    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        bs = b.slice(bi, bs);
        if (s[i])
          s[i] += bs;
        else
          s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        if (s[i])
          s[i] += bm;
        else
          s[++i] = bm;
      } else {
        s[++i] = null;
        q.push({ i, x: number_default(am, bm) });
      }
      bi = reB.lastIndex;
    }
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    return s.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
      for (var i2 = 0, o; i2 < b; ++i2)
        s[(o = q[i2]).i] = o.x(t);
      return s.join("");
    });
  }

  // node_modules/d3-interpolate/src/value.js
  function value_default(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? constant_default2(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
  }

  // node_modules/d3-interpolate/src/round.js
  function round_default(a, b) {
    return a = +a, b = +b, function(t) {
      return Math.round(a * (1 - t) + b * t);
    };
  }

  // node_modules/d3-interpolate/src/transform/decompose.js
  var degrees = 180 / Math.PI;
  var identity = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
  };
  function decompose_default(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b))
      a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d)
      c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d))
      c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c)
      a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX,
      scaleY
    };
  }

  // node_modules/d3-interpolate/src/transform/parse.js
  var svgNode;
  function parseCss(value) {
    const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null)
      return identity;
    if (!svgNode)
      svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate()))
      return identity;
    value = value.matrix;
    return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
  }

  // node_modules/d3-interpolate/src/transform/index.js
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180)
          b += 360;
        else if (b - a > 180)
          a += 360;
        q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number_default(a, b) });
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }
    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number_default(a, b) });
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({ i: i - 4, x: number_default(xa, xb) }, { i: i - 2, x: number_default(ya, yb) });
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function(a, b) {
      var s = [], q = [];
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null;
      return function(t) {
        var i = -1, n = q.length, o;
        while (++i < n)
          s[(o = q[i]).i] = o.x(t);
        return s.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

  // node_modules/d3-interpolate/src/zoom.js
  var epsilon2 = 1e-12;
  function cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
  }
  function sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
  }
  function tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
  }
  var zoom_default = function zoomRho(rho, rho2, rho4) {
    function zoom(p0, p1) {
      var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
      if (d2 < epsilon2) {
        S = Math.log(w1 / w0) / rho;
        i = function(t) {
          return [
            ux0 + t * dx,
            uy0 + t * dy,
            w0 * Math.exp(rho * t * S)
          ];
        };
      } else {
        var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / rho;
        i = function(t) {
          var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
          return [
            ux0 + u * dx,
            uy0 + u * dy,
            w0 * coshr0 / cosh(rho * s + r0)
          ];
        };
      }
      i.duration = S * 1e3 * rho / Math.SQRT2;
      return i;
    }
    zoom.rho = function(_) {
      var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
      return zoomRho(_1, _2, _4);
    };
    return zoom;
  }(Math.SQRT2, 2, 4);

  // node_modules/d3-timer/src/timer.js
  var frame = 0;
  var timeout = 0;
  var interval = 0;
  var pokeDelay = 1e3;
  var taskHead;
  var taskTail;
  var clockLast = 0;
  var clockNow = 0;
  var clockSkew = 0;
  var clock = typeof performance === "object" && performance.now ? performance : Date;
  var setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
  };
  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }
  function clearNow() {
    clockNow = 0;
  }
  function Timer() {
    this._call = this._time = this._next = null;
  }
  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function")
        throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail)
          taskTail._next = this;
        else
          taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now();
    ++frame;
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0)
        t._call.call(void 0, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now2 = clock.now(), delay = now2 - clockLast;
    if (delay > pokeDelay)
      clockSkew -= delay, clockLast = now2;
  }
  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time)
          time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }
  function sleep(time) {
    if (frame)
      return;
    if (timeout)
      timeout = clearTimeout(timeout);
    var delay = time - clockNow;
    if (delay > 24) {
      if (time < Infinity)
        timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval)
        interval = clearInterval(interval);
    } else {
      if (!interval)
        clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  // node_modules/d3-timer/src/timeout.js
  function timeout_default(callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart((elapsed) => {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  // node_modules/d3-transition/src/transition/schedule.js
  var emptyOn = dispatch_default("start", "end", "cancel", "interrupt");
  var emptyTween = [];
  var CREATED = 0;
  var SCHEDULED = 1;
  var STARTING = 2;
  var STARTED = 3;
  var RUNNING = 4;
  var ENDING = 5;
  var ENDED = 6;
  function schedule_default(node, name, id2, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules)
      node.__transition = {};
    else if (id2 in schedules)
      return;
    create(node, id2, {
      name,
      index,
      // For context during callback.
      group,
      // For context during callback.
      on: emptyOn,
      tween: emptyTween,
      time: timing.time,
      delay: timing.delay,
      duration: timing.duration,
      ease: timing.ease,
      timer: null,
      state: CREATED
    });
  }
  function init(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > CREATED)
      throw new Error("too late; already scheduled");
    return schedule;
  }
  function set2(node, id2) {
    var schedule = get2(node, id2);
    if (schedule.state > STARTED)
      throw new Error("too late; already running");
    return schedule;
  }
  function get2(node, id2) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id2]))
      throw new Error("transition not found");
    return schedule;
  }
  function create(node, id2, self) {
    var schedules = node.__transition, tween;
    schedules[id2] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start2, self.delay, self.time);
      if (self.delay <= elapsed)
        start2(elapsed - self.delay);
    }
    function start2(elapsed) {
      var i, j, n, o;
      if (self.state !== SCHEDULED)
        return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name)
          continue;
        if (o.state === STARTED)
          return timeout_default(start2);
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } else if (+i < id2) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      }
      timeout_default(function() {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      });
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING)
        return;
      self.state = STARTED;
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1), i = -1, n = tween.length;
      while (++i < n) {
        tween[i].call(node, t);
      }
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id2];
      for (var i in schedules)
        return;
      delete node.__transition;
    }
  }

  // node_modules/d3-transition/src/interrupt.js
  function interrupt_default(node, name) {
    var schedules = node.__transition, schedule, active, empty2 = true, i;
    if (!schedules)
      return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty2 = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty2)
      delete node.__transition;
  }

  // node_modules/d3-transition/src/selection/interrupt.js
  function interrupt_default2(name) {
    return this.each(function() {
      interrupt_default(this, name);
    });
  }

  // node_modules/d3-transition/src/transition/tween.js
  function tweenRemove(id2, name) {
    var tween0, tween1;
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = tween0 = tween;
        for (var i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1 = tween1.slice();
            tween1.splice(i, 1);
            break;
          }
        }
      }
      schedule.tween = tween1;
    };
  }
  function tweenFunction(id2, name, value) {
    var tween0, tween1;
    if (typeof value !== "function")
      throw new Error();
    return function() {
      var schedule = set2(this, id2), tween = schedule.tween;
      if (tween !== tween0) {
        tween1 = (tween0 = tween).slice();
        for (var t = { name, value }, i = 0, n = tween1.length; i < n; ++i) {
          if (tween1[i].name === name) {
            tween1[i] = t;
            break;
          }
        }
        if (i === n)
          tween1.push(t);
      }
      schedule.tween = tween1;
    };
  }
  function tween_default(name, value) {
    var id2 = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get2(this.node(), id2).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id2, name, value));
  }
  function tweenValue(transition2, name, value) {
    var id2 = transition2._id;
    transition2.each(function() {
      var schedule = set2(this, id2);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
      return get2(node, id2).value[name];
    };
  }

  // node_modules/d3-transition/src/transition/interpolate.js
  function interpolate_default(a, b) {
    var c;
    return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
  }

  // node_modules/d3-transition/src/transition/attr.js
  function attrRemove2(name) {
    return function() {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS2(fullname) {
    return function() {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS2(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS2(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0, value1 = value(this), string1;
      if (value1 == null)
        return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attr_default2(name, value) {
    var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS2 : attrFunction2)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS2 : attrRemove2)(fullname) : (fullname.local ? attrConstantNS2 : attrConstant2)(fullname, i, value));
  }

  // node_modules/d3-transition/src/transition/attrTween.js
  function attrInterpolate(name, i) {
    return function(t) {
      this.setAttribute(name, i.call(this, t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function(t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween_default(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    var fullname = namespace_default(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }

  // node_modules/d3-transition/src/transition/delay.js
  function delayFunction(id2, value) {
    return function() {
      init(this, id2).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id2, value) {
    return value = +value, function() {
      init(this, id2).delay = value;
    };
  }
  function delay_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id2, value)) : get2(this.node(), id2).delay;
  }

  // node_modules/d3-transition/src/transition/duration.js
  function durationFunction(id2, value) {
    return function() {
      set2(this, id2).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id2, value) {
    return value = +value, function() {
      set2(this, id2).duration = value;
    };
  }
  function duration_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id2, value)) : get2(this.node(), id2).duration;
  }

  // node_modules/d3-transition/src/transition/ease.js
  function easeConstant(id2, value) {
    if (typeof value !== "function")
      throw new Error();
    return function() {
      set2(this, id2).ease = value;
    };
  }
  function ease_default(value) {
    var id2 = this._id;
    return arguments.length ? this.each(easeConstant(id2, value)) : get2(this.node(), id2).ease;
  }

  // node_modules/d3-transition/src/transition/easeVarying.js
  function easeVarying(id2, value) {
    return function() {
      var v = value.apply(this, arguments);
      if (typeof v !== "function")
        throw new Error();
      set2(this, id2).ease = v;
    };
  }
  function easeVarying_default(value) {
    if (typeof value !== "function")
      throw new Error();
    return this.each(easeVarying(this._id, value));
  }

  // node_modules/d3-transition/src/transition/filter.js
  function filter_default2(match) {
    if (typeof match !== "function")
      match = matcher_default(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/merge.js
  function merge_default2(transition2) {
    if (transition2._id !== this._id)
      throw new Error();
    for (var groups0 = this._groups, groups1 = transition2._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }

  // node_modules/d3-transition/src/transition/on.js
  function start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
      var i = t.indexOf(".");
      if (i >= 0)
        t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id2, name, listener) {
    var on0, on1, sit = start(name) ? init : set2;
    return function() {
      var schedule = sit(this, id2), on = schedule.on;
      if (on !== on0)
        (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function on_default2(name, listener) {
    var id2 = this._id;
    return arguments.length < 2 ? get2(this.node(), id2).on.on(name) : this.each(onFunction(id2, name, listener));
  }

  // node_modules/d3-transition/src/transition/remove.js
  function removeFunction(id2) {
    return function() {
      var parent = this.parentNode;
      for (var i in this.__transition)
        if (+i !== id2)
          return;
      if (parent)
        parent.removeChild(this);
    };
  }
  function remove_default2() {
    return this.on("end.remove", removeFunction(this._id));
  }

  // node_modules/d3-transition/src/transition/select.js
  function select_default3(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selector_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node)
            subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule_default(subgroup[i], name, id2, i, subgroup, get2(node, id2));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selectAll.js
  function selectAll_default2(select) {
    var name = this._name, id2 = this._id;
    if (typeof select !== "function")
      select = selectorAll_default(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children2 = select.call(node, node.__data__, i, group), child, inherit2 = get2(node, id2), k = 0, l = children2.length; k < l; ++k) {
            if (child = children2[k]) {
              schedule_default(child, name, id2, k, children2, inherit2);
            }
          }
          subgroups.push(children2);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id2);
  }

  // node_modules/d3-transition/src/transition/selection.js
  var Selection2 = selection_default.prototype.constructor;
  function selection_default2() {
    return new Selection2(this._groups, this._parents);
  }

  // node_modules/d3-transition/src/transition/style.js
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove2(name) {
    return function() {
      this.style.removeProperty(name);
    };
  }
  function styleConstant2(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction2(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
      var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
      if (value1 == null)
        string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id2, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove2;
    return function() {
      var schedule = set2(this, id2), on = schedule.on, listener = schedule.value[key] == null ? remove2 || (remove2 = styleRemove2(name)) : void 0;
      if (on !== on0 || listener0 !== listener)
        (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function style_default2(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove2(name)) : typeof value === "function" ? this.styleTween(name, styleFunction2(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant2(name, i, value), priority).on("end.style." + name, null);
  }

  // node_modules/d3-transition/src/transition/styleTween.js
  function styleInterpolate(name, i, priority) {
    return function(t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function styleTween_default(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }

  // node_modules/d3-transition/src/transition/text.js
  function textConstant2(value) {
    return function() {
      this.textContent = value;
    };
  }
  function textFunction2(value) {
    return function() {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function text_default2(value) {
    return this.tween("text", typeof value === "function" ? textFunction2(tweenValue(this, "text", value)) : textConstant2(value == null ? "" : value + ""));
  }

  // node_modules/d3-transition/src/transition/textTween.js
  function textInterpolate(i) {
    return function(t) {
      this.textContent = i.call(this, t);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0)
        t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function textTween_default(value) {
    var key = "text";
    if (arguments.length < 1)
      return (key = this.tween(key)) && key._value;
    if (value == null)
      return this.tween(key, null);
    if (typeof value !== "function")
      throw new Error();
    return this.tween(key, textTween(value));
  }

  // node_modules/d3-transition/src/transition/transition.js
  function transition_default() {
    var name = this._name, id0 = this._id, id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit2 = get2(node, id0);
          schedule_default(node, name, id1, i, group, {
            time: inherit2.time + inherit2.delay + inherit2.duration,
            delay: 0,
            duration: inherit2.duration,
            ease: inherit2.ease
          });
        }
      }
    }
    return new Transition(groups, this._parents, name, id1);
  }

  // node_modules/d3-transition/src/transition/end.js
  function end_default() {
    var on0, on1, that = this, id2 = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
      var cancel = { value: reject }, end = { value: function() {
        if (--size === 0)
          resolve();
      } };
      that.each(function() {
        var schedule = set2(this, id2), on = schedule.on;
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      });
      if (size === 0)
        resolve();
    });
  }

  // node_modules/d3-transition/src/transition/index.js
  var id = 0;
  function Transition(groups, parents, name, id2) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id2;
  }
  function transition(name) {
    return selection_default().transition(name);
  }
  function newId() {
    return ++id;
  }
  var selection_prototype = selection_default.prototype;
  Transition.prototype = transition.prototype = {
    constructor: Transition,
    select: select_default3,
    selectAll: selectAll_default2,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
    filter: filter_default2,
    merge: merge_default2,
    selection: selection_default2,
    transition: transition_default,
    call: selection_prototype.call,
    nodes: selection_prototype.nodes,
    node: selection_prototype.node,
    size: selection_prototype.size,
    empty: selection_prototype.empty,
    each: selection_prototype.each,
    on: on_default2,
    attr: attr_default2,
    attrTween: attrTween_default,
    style: style_default2,
    styleTween: styleTween_default,
    text: text_default2,
    textTween: textTween_default,
    remove: remove_default2,
    tween: tween_default,
    delay: delay_default,
    duration: duration_default,
    ease: ease_default,
    easeVarying: easeVarying_default,
    end: end_default,
    [Symbol.iterator]: selection_prototype[Symbol.iterator]
  };

  // node_modules/d3-ease/src/cubic.js
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }

  // node_modules/d3-transition/src/selection/transition.js
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id2) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id2])) {
      if (!(node = node.parentNode)) {
        throw new Error(`transition ${id2} not found`);
      }
    }
    return timing;
  }
  function transition_default2(name) {
    var id2, timing;
    if (name instanceof Transition) {
      id2 = name._id, name = name._name;
    } else {
      id2 = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule_default(node, name, id2, i, group, timing || inherit(node, id2));
        }
      }
    }
    return new Transition(groups, this._parents, name, id2);
  }

  // node_modules/d3-transition/src/selection/index.js
  selection_default.prototype.interrupt = interrupt_default2;
  selection_default.prototype.transition = transition_default2;

  // node_modules/d3-brush/src/brush.js
  var { abs, max, min } = Math;
  function number1(e) {
    return [+e[0], +e[1]];
  }
  function number2(e) {
    return [number1(e[0]), number1(e[1])];
  }
  var X = {
    name: "x",
    handles: ["w", "e"].map(type),
    input: function(x, e) {
      return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]];
    },
    output: function(xy) {
      return xy && [xy[0][0], xy[1][0]];
    }
  };
  var Y = {
    name: "y",
    handles: ["n", "s"].map(type),
    input: function(y, e) {
      return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]];
    },
    output: function(xy) {
      return xy && [xy[0][1], xy[1][1]];
    }
  };
  var XY = {
    name: "xy",
    handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
    input: function(xy) {
      return xy == null ? null : number2(xy);
    },
    output: function(xy) {
      return xy;
    }
  };
  function type(t) {
    return { type: t };
  }

  // node_modules/d3-format/src/formatDecimal.js
  function formatDecimal_default(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
  }
  function formatDecimalParts(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
      return null;
    var i, coefficient = x.slice(0, i);
    return [
      coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
      +x.slice(i + 1)
    ];
  }

  // node_modules/d3-format/src/exponent.js
  function exponent_default(x) {
    return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
  }

  // node_modules/d3-format/src/formatGroup.js
  function formatGroup_default(grouping, thousands) {
    return function(value, width) {
      var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
      while (i > 0 && g > 0) {
        if (length + g + 1 > width)
          g = Math.max(1, width - length);
        t.push(value.substring(i -= g, i + g));
        if ((length += g + 1) > width)
          break;
        g = grouping[j = (j + 1) % grouping.length];
      }
      return t.reverse().join(thousands);
    };
  }

  // node_modules/d3-format/src/formatNumerals.js
  function formatNumerals_default(numerals) {
    return function(value) {
      return value.replace(/[0-9]/g, function(i) {
        return numerals[+i];
      });
    };
  }

  // node_modules/d3-format/src/formatSpecifier.js
  var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function formatSpecifier(specifier) {
    if (!(match = re.exec(specifier)))
      throw new Error("invalid format: " + specifier);
    var match;
    return new FormatSpecifier({
      fill: match[1],
      align: match[2],
      sign: match[3],
      symbol: match[4],
      zero: match[5],
      width: match[6],
      comma: match[7],
      precision: match[8] && match[8].slice(1),
      trim: match[9],
      type: match[10]
    });
  }
  formatSpecifier.prototype = FormatSpecifier.prototype;
  function FormatSpecifier(specifier) {
    this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
    this.align = specifier.align === void 0 ? ">" : specifier.align + "";
    this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === void 0 ? void 0 : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === void 0 ? "" : specifier.type + "";
  }
  FormatSpecifier.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
  };

  // node_modules/d3-format/src/formatTrim.js
  function formatTrim_default(s) {
    out:
      for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
        switch (s[i]) {
          case ".":
            i0 = i1 = i;
            break;
          case "0":
            if (i0 === 0)
              i0 = i;
            i1 = i;
            break;
          default:
            if (!+s[i])
              break out;
            if (i0 > 0)
              i0 = 0;
            break;
        }
      }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
  }

  // node_modules/d3-format/src/formatPrefixAuto.js
  var prefixExponent;
  function formatPrefixAuto_default(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d)
      return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
  }

  // node_modules/d3-format/src/formatRounded.js
  function formatRounded_default(x, p) {
    var d = formatDecimalParts(x, p);
    if (!d)
      return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
  }

  // node_modules/d3-format/src/formatTypes.js
  var formatTypes_default = {
    "%": (x, p) => (x * 100).toFixed(p),
    "b": (x) => Math.round(x).toString(2),
    "c": (x) => x + "",
    "d": formatDecimal_default,
    "e": (x, p) => x.toExponential(p),
    "f": (x, p) => x.toFixed(p),
    "g": (x, p) => x.toPrecision(p),
    "o": (x) => Math.round(x).toString(8),
    "p": (x, p) => formatRounded_default(x * 100, p),
    "r": formatRounded_default,
    "s": formatPrefixAuto_default,
    "X": (x) => Math.round(x).toString(16).toUpperCase(),
    "x": (x) => Math.round(x).toString(16)
  };

  // node_modules/d3-format/src/identity.js
  function identity_default(x) {
    return x;
  }

  // node_modules/d3-format/src/locale.js
  var map = Array.prototype.map;
  var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
  function locale_default(locale2) {
    var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity_default : formatGroup_default(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity_default : formatNumerals_default(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
    function newFormat(specifier) {
      specifier = formatSpecifier(specifier);
      var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type2 = specifier.type;
      if (type2 === "n")
        comma = true, type2 = "g";
      else if (!formatTypes_default[type2])
        precision === void 0 && (precision = 12), trim = true, type2 = "g";
      if (zero3 || fill === "0" && align === "=")
        zero3 = true, fill = "0", align = "=";
      var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type2) ? "0" + type2.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type2) ? percent : "";
      var formatType = formatTypes_default[type2], maybeSuffix = /[defgprs%]/.test(type2);
      precision = precision === void 0 ? 6 : /[gprs]/.test(type2) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
      function format2(value) {
        var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
        if (type2 === "c") {
          valueSuffix = formatType(value) + valueSuffix;
          value = "";
        } else {
          value = +value;
          var valueNegative = value < 0 || 1 / value < 0;
          value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
          if (trim)
            value = formatTrim_default(value);
          if (valueNegative && +value === 0 && sign !== "+")
            valueNegative = false;
          valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
          valueSuffix = (type2 === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
          if (maybeSuffix) {
            i = -1, n = value.length;
            while (++i < n) {
              if (c = value.charCodeAt(i), 48 > c || c > 57) {
                valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                value = value.slice(0, i);
                break;
              }
            }
          }
        }
        if (comma && !zero3)
          value = group(value, Infinity);
        var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
        if (comma && zero3)
          value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
        switch (align) {
          case "<":
            value = valuePrefix + value + valueSuffix + padding;
            break;
          case "=":
            value = valuePrefix + padding + value + valueSuffix;
            break;
          case "^":
            value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
            break;
          default:
            value = padding + valuePrefix + value + valueSuffix;
            break;
        }
        return numerals(value);
      }
      format2.toString = function() {
        return specifier + "";
      };
      return format2;
    }
    function formatPrefix2(specifier, value) {
      var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
      return function(value2) {
        return f(k * value2) + prefix;
      };
    }
    return {
      format: newFormat,
      formatPrefix: formatPrefix2
    };
  }

  // node_modules/d3-format/src/defaultLocale.js
  var locale;
  var format;
  var formatPrefix;
  defaultLocale({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
  });
  function defaultLocale(definition) {
    locale = locale_default(definition);
    format = locale.format;
    formatPrefix = locale.formatPrefix;
    return locale;
  }

  // node_modules/d3-format/src/precisionFixed.js
  function precisionFixed_default(step) {
    return Math.max(0, -exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionPrefix.js
  function precisionPrefix_default(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
  }

  // node_modules/d3-format/src/precisionRound.js
  function precisionRound_default(step, max2) {
    step = Math.abs(step), max2 = Math.abs(max2) - step;
    return Math.max(0, exponent_default(max2) - exponent_default(step)) + 1;
  }

  // node_modules/d3-scale/src/init.js
  function initRange(domain, range) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(domain);
        break;
      default:
        this.range(range).domain(domain);
        break;
    }
    return this;
  }

  // node_modules/d3-scale/src/constant.js
  function constants(x) {
    return function() {
      return x;
    };
  }

  // node_modules/d3-scale/src/number.js
  function number3(x) {
    return +x;
  }

  // node_modules/d3-scale/src/continuous.js
  var unit = [0, 1];
  function identity2(x) {
    return x;
  }
  function normalize(a, b) {
    return (b -= a = +a) ? function(x) {
      return (x - a) / b;
    } : constants(isNaN(b) ? NaN : 0.5);
  }
  function clamper(a, b) {
    var t;
    if (a > b)
      t = a, a = b, b = t;
    return function(x) {
      return Math.max(a, Math.min(b, x));
    };
  }
  function bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0)
      d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
    else
      d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
      return r0(d0(x));
    };
  }
  function polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    if (domain[j] < domain[0]) {
      domain = domain.slice().reverse();
      range = range.slice().reverse();
    }
    while (++i < j) {
      d[i] = normalize(domain[i], domain[i + 1]);
      r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
      var i2 = bisect_default(domain, x, 1, j) - 1;
      return r[i2](d[i2](x));
    };
  }
  function copy(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
  }
  function transformer() {
    var domain = unit, range = unit, interpolate = value_default, transform2, untransform, unknown, clamp = identity2, piecewise, output, input;
    function rescale() {
      var n = Math.min(domain.length, range.length);
      if (clamp !== identity2)
        clamp = clamper(domain[0], domain[n - 1]);
      piecewise = n > 2 ? polymap : bimap;
      output = input = null;
      return scale;
    }
    function scale(x) {
      return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform2), range, interpolate)))(transform2(clamp(x)));
    }
    scale.invert = function(y) {
      return clamp(untransform((input || (input = piecewise(range, domain.map(transform2), number_default)))(y)));
    };
    scale.domain = function(_) {
      return arguments.length ? (domain = Array.from(_, number3), rescale()) : domain.slice();
    };
    scale.range = function(_) {
      return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
      return range = Array.from(_), interpolate = round_default, rescale();
    };
    scale.clamp = function(_) {
      return arguments.length ? (clamp = _ ? true : identity2, rescale()) : clamp !== identity2;
    };
    scale.interpolate = function(_) {
      return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
      return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
      transform2 = t, untransform = u;
      return rescale();
    };
  }
  function continuous() {
    return transformer()(identity2, identity2);
  }

  // node_modules/d3-scale/src/tickFormat.js
  function tickFormat(start2, stop, count, specifier) {
    var step = tickStep(start2, stop, count), precision;
    specifier = formatSpecifier(specifier == null ? ",f" : specifier);
    switch (specifier.type) {
      case "s": {
        var value = Math.max(Math.abs(start2), Math.abs(stop));
        if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value)))
          specifier.precision = precision;
        return formatPrefix(specifier, value);
      }
      case "":
      case "e":
      case "g":
      case "p":
      case "r": {
        if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start2), Math.abs(stop)))))
          specifier.precision = precision - (specifier.type === "e");
        break;
      }
      case "f":
      case "%": {
        if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step)))
          specifier.precision = precision - (specifier.type === "%") * 2;
        break;
      }
    }
    return format(specifier);
  }

  // node_modules/d3-scale/src/linear.js
  function linearish(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
      var d = domain();
      return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
      var d = domain();
      return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
      if (count == null)
        count = 10;
      var d = domain();
      var i0 = 0;
      var i1 = d.length - 1;
      var start2 = d[i0];
      var stop = d[i1];
      var prestep;
      var step;
      var maxIter = 10;
      if (stop < start2) {
        step = start2, start2 = stop, stop = step;
        step = i0, i0 = i1, i1 = step;
      }
      while (maxIter-- > 0) {
        step = tickIncrement(start2, stop, count);
        if (step === prestep) {
          d[i0] = start2;
          d[i1] = stop;
          return domain(d);
        } else if (step > 0) {
          start2 = Math.floor(start2 / step) * step;
          stop = Math.ceil(stop / step) * step;
        } else if (step < 0) {
          start2 = Math.ceil(start2 * step) / step;
          stop = Math.floor(stop * step) / step;
        } else {
          break;
        }
        prestep = step;
      }
      return scale;
    };
    return scale;
  }
  function linear2() {
    var scale = continuous();
    scale.copy = function() {
      return copy(scale, linear2());
    };
    initRange.apply(scale, arguments);
    return linearish(scale);
  }

  // node_modules/d3-zoom/src/constant.js
  var constant_default4 = (x) => () => x;

  // node_modules/d3-zoom/src/event.js
  function ZoomEvent(type2, {
    sourceEvent,
    target,
    transform: transform2,
    dispatch: dispatch2
  }) {
    Object.defineProperties(this, {
      type: { value: type2, enumerable: true, configurable: true },
      sourceEvent: { value: sourceEvent, enumerable: true, configurable: true },
      target: { value: target, enumerable: true, configurable: true },
      transform: { value: transform2, enumerable: true, configurable: true },
      _: { value: dispatch2 }
    });
  }

  // node_modules/d3-zoom/src/transform.js
  function Transform(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
  }
  Transform.prototype = {
    constructor: Transform,
    scale: function(k) {
      return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
      return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
      return [point[0] * this.k + this.x, point[1] * this.k + this.y];
    },
    applyX: function(x) {
      return x * this.k + this.x;
    },
    applyY: function(y) {
      return y * this.k + this.y;
    },
    invert: function(location) {
      return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
    },
    invertX: function(x) {
      return (x - this.x) / this.k;
    },
    invertY: function(y) {
      return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
      return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
      return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
  };
  var identity3 = new Transform(1, 0, 0);
  transform.prototype = Transform.prototype;
  function transform(node) {
    while (!node.__zoom)
      if (!(node = node.parentNode))
        return identity3;
    return node.__zoom;
  }

  // node_modules/d3-zoom/src/noevent.js
  function nopropagation2(event) {
    event.stopImmediatePropagation();
  }
  function noevent_default3(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // node_modules/d3-zoom/src/zoom.js
  function defaultFilter(event) {
    return (!event.ctrlKey || event.type === "wheel") && !event.button;
  }
  function defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
      e = e.ownerSVGElement || e;
      if (e.hasAttribute("viewBox")) {
        e = e.viewBox.baseVal;
        return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
      }
      return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
    }
    return [[0, 0], [e.clientWidth, e.clientHeight]];
  }
  function defaultTransform() {
    return this.__zoom || identity3;
  }
  function defaultWheelDelta(event) {
    return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 2e-3) * (event.ctrlKey ? 10 : 1);
  }
  function defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
  }
  function defaultConstrain(transform2, extent, translateExtent) {
    var dx0 = transform2.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform2.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform2.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform2.invertY(extent[1][1]) - translateExtent[1][1];
    return transform2.translate(
      dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
      dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
    );
  }
  function zoom_default2() {
    var filter2 = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default, listeners = dispatch_default("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
    function zoom(selection2) {
      selection2.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform2, point, event) {
      var selection2 = collection.selection ? collection.selection() : collection;
      selection2.property("__zoom", defaultTransform);
      if (collection !== selection2) {
        schedule(collection, transform2, point, event);
      } else {
        selection2.interrupt().each(function() {
          gesture(this, arguments).event(event).start().zoom(null, typeof transform2 === "function" ? transform2.apply(this, arguments) : transform2).end();
        });
      }
    };
    zoom.scaleBy = function(selection2, k, p, event) {
      zoom.scaleTo(selection2, function() {
        var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return k0 * k1;
      }, p, event);
    };
    zoom.scaleTo = function(selection2, k, p, event) {
      zoom.transform(selection2, function() {
        var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
        return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
      }, p, event);
    };
    zoom.translateBy = function(selection2, x, y, event) {
      zoom.transform(selection2, function() {
        return constrain(this.__zoom.translate(
          typeof x === "function" ? x.apply(this, arguments) : x,
          typeof y === "function" ? y.apply(this, arguments) : y
        ), extent.apply(this, arguments), translateExtent);
      }, null, event);
    };
    zoom.translateTo = function(selection2, x, y, p, event) {
      zoom.transform(selection2, function() {
        var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
        return constrain(identity3.translate(p0[0], p0[1]).scale(t.k).translate(
          typeof x === "function" ? -x.apply(this, arguments) : -x,
          typeof y === "function" ? -y.apply(this, arguments) : -y
        ), e, translateExtent);
      }, p, event);
    };
    function scale(transform2, k) {
      k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
      return k === transform2.k ? transform2 : new Transform(k, transform2.x, transform2.y);
    }
    function translate(transform2, p0, p1) {
      var x = p0[0] - p1[0] * transform2.k, y = p0[1] - p1[1] * transform2.k;
      return x === transform2.x && y === transform2.y ? transform2 : new Transform(transform2.k, x, y);
    }
    function centroid(extent2) {
      return [(+extent2[0][0] + +extent2[1][0]) / 2, (+extent2[0][1] + +extent2[1][1]) / 2];
    }
    function schedule(transition2, transform2, point, event) {
      transition2.on("start.zoom", function() {
        gesture(this, arguments).event(event).start();
      }).on("interrupt.zoom end.zoom", function() {
        gesture(this, arguments).event(event).end();
      }).tween("zoom", function() {
        var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform2 === "function" ? transform2.apply(that, args) : transform2, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
        return function(t) {
          if (t === 1)
            t = b;
          else {
            var l = i(t), k = w / l[2];
            t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
          }
          g.zoom(null, t);
        };
      });
    }
    function gesture(that, args, clean) {
      return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
      this.that = that;
      this.args = args;
      this.active = 0;
      this.sourceEvent = null;
      this.extent = extent.apply(that, args);
      this.taps = 0;
    }
    Gesture.prototype = {
      event: function(event) {
        if (event)
          this.sourceEvent = event;
        return this;
      },
      start: function() {
        if (++this.active === 1) {
          this.that.__zooming = this;
          this.emit("start");
        }
        return this;
      },
      zoom: function(key, transform2) {
        if (this.mouse && key !== "mouse")
          this.mouse[1] = transform2.invert(this.mouse[0]);
        if (this.touch0 && key !== "touch")
          this.touch0[1] = transform2.invert(this.touch0[0]);
        if (this.touch1 && key !== "touch")
          this.touch1[1] = transform2.invert(this.touch1[0]);
        this.that.__zoom = transform2;
        this.emit("zoom");
        return this;
      },
      end: function() {
        if (--this.active === 0) {
          delete this.that.__zooming;
          this.emit("end");
        }
        return this;
      },
      emit: function(type2) {
        var d = select_default2(this.that).datum();
        listeners.call(
          type2,
          this.that,
          new ZoomEvent(type2, {
            sourceEvent: this.sourceEvent,
            target: zoom,
            type: type2,
            transform: this.that.__zoom,
            dispatch: listeners
          }),
          d
        );
      }
    };
    function wheeled(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
      if (g.wheel) {
        if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
          g.mouse[1] = t.invert(g.mouse[0] = p);
        }
        clearTimeout(g.wheel);
      } else if (t.k === k)
        return;
      else {
        g.mouse = [p, t.invert(p)];
        interrupt_default(this);
        g.start();
      }
      noevent_default3(event);
      g.wheel = setTimeout(wheelidled, wheelDelay);
      g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
      function wheelidled() {
        g.wheel = null;
        g.end();
      }
    }
    function mousedowned(event, ...args) {
      if (touchending || !filter2.apply(this, arguments))
        return;
      var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default2(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
      nodrag_default(event.view);
      nopropagation2(event);
      g.mouse = [p, this.__zoom.invert(p)];
      interrupt_default(this);
      g.start();
      function mousemoved(event2) {
        noevent_default3(event2);
        if (!g.moved) {
          var dx = event2.clientX - x0, dy = event2.clientY - y0;
          g.moved = dx * dx + dy * dy > clickDistance2;
        }
        g.event(event2).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event2, currentTarget), g.mouse[1]), g.extent, translateExtent));
      }
      function mouseupped(event2) {
        v.on("mousemove.zoom mouseup.zoom", null);
        yesdrag(event2.view, g.moved);
        noevent_default3(event2);
        g.event(event2).end();
      }
    }
    function dblclicked(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
      noevent_default3(event);
      if (duration > 0)
        select_default2(this).transition().duration(duration).call(schedule, t1, p0, event);
      else
        select_default2(this).call(zoom.transform, t1, p0, event);
    }
    function touchstarted(event, ...args) {
      if (!filter2.apply(this, arguments))
        return;
      var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
      nopropagation2(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer_default(t, this);
        p = [p, this.__zoom.invert(p), t.identifier];
        if (!g.touch0)
          g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
        else if (!g.touch1 && g.touch0[2] !== p[2])
          g.touch1 = p, g.taps = 0;
      }
      if (touchstarting)
        touchstarting = clearTimeout(touchstarting);
      if (started) {
        if (g.taps < 2)
          touchfirst = p[0], touchstarting = setTimeout(function() {
            touchstarting = null;
          }, touchDelay);
        interrupt_default(this);
        g.start();
      }
    }
    function touchmoved(event, ...args) {
      if (!this.__zooming)
        return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
      noevent_default3(event);
      for (i = 0; i < n; ++i) {
        t = touches[i], p = pointer_default(t, this);
        if (g.touch0 && g.touch0[2] === t.identifier)
          g.touch0[0] = p;
        else if (g.touch1 && g.touch1[2] === t.identifier)
          g.touch1[0] = p;
      }
      t = g.that.__zoom;
      if (g.touch1) {
        var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
        t = scale(t, Math.sqrt(dp / dl));
        p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
        l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
      } else if (g.touch0)
        p = g.touch0[0], l = g.touch0[1];
      else
        return;
      g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended(event, ...args) {
      if (!this.__zooming)
        return;
      var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
      nopropagation2(event);
      if (touchending)
        clearTimeout(touchending);
      touchending = setTimeout(function() {
        touchending = null;
      }, touchDelay);
      for (i = 0; i < n; ++i) {
        t = touches[i];
        if (g.touch0 && g.touch0[2] === t.identifier)
          delete g.touch0;
        else if (g.touch1 && g.touch1[2] === t.identifier)
          delete g.touch1;
      }
      if (g.touch1 && !g.touch0)
        g.touch0 = g.touch1, delete g.touch1;
      if (g.touch0)
        g.touch0[1] = this.__zoom.invert(g.touch0[0]);
      else {
        g.end();
        if (g.taps === 2) {
          t = pointer_default(t, this);
          if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
            var p = select_default2(this).on("dblclick.zoom");
            if (p)
              p.apply(this, arguments);
          }
        }
      }
    }
    zoom.wheelDelta = function(_) {
      return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default4(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
      return arguments.length ? (filter2 = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : filter2;
    };
    zoom.touchable = function(_) {
      return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default4(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
      return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default4([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
      return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
    };
    zoom.translateExtent = function(_) {
      return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
    };
    zoom.constrain = function(_) {
      return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
      return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
      return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
      var value = listeners.on.apply(listeners, arguments);
      return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
      return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    zoom.tapDistance = function(_) {
      return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
    };
    return zoom;
  }

  // node_modules/rna-visualizer/dist/styles.js
  var BLACK = "rgb(0, 0, 0)";
  var WHITE = "rgb(255,255,255)";
  var RED = "rgb(255, 0, 255)";
  var GREEN = "rgb(0, 255, 0)";
  var BLUE = "rgb(0, 0, 255)";
  var GRAY = "rgb(204, 204, 204)";
  var BROWN = "rgb(211.65, 104.55, 30.6)";
  var Styles = class {
    constructor() {
      this.default = /* @__PURE__ */ new Map([
        ["text-black", { fill: BLACK }],
        ["text-red", { fill: RED }],
        ["text-green", { fill: GREEN }],
        ["text-blue", { fill: BLUE }],
        ["text-gray", { fill: GRAY }],
        ["text-brown", { fill: BROWN }],
        ["text", {
          fill: BLACK,
          "text-anchor": "middle",
          baseline: "middle"
        }],
        ["circle-black", {
          stroke: BLACK,
          fill: "none"
        }],
        ["circle-red", {
          stroke: RED,
          fill: "none"
        }],
        ["circle-green", {
          stroke: GREEN,
          fill: "none"
        }],
        ["circle-blue", {
          stroke: BLUE,
          fill: "none"
        }],
        ["circle-gray", {
          stroke: GRAY,
          fill: "none"
        }],
        ["circle-brown", {
          stroke: BROWN,
          fill: "none"
        }],
        ["circle", { stroke: BLACK }],
        ["numbering-label", { fill: GRAY }],
        ["numbering-line", { stroke: GRAY }],
        ["template", { visibility: "hidden" }],
        ["bp-line", { stroke: BLACK }],
        ["residue-circle", { fill: WHITE }],
        ["res-line", { stroke: GRAY }],
        ["mapping-line", { stroke: "yellow" }],
        ["title-text", {
          fill: "black",
          baseline: "top",
          alpha: 1,
          "text-anchor": "start",
          "font-size": "11px",
          "font-weight": "normal",
          "font-family": "Helvetica"
        }],
        ["title-background", {
          stroke: WHITE,
          fill: WHITE,
          alpha: 1
        }]
      ]);
      this.styles = new Map(this.default);
    }
    /**
     * Adds a set of styles to the custom styles map.
     * @param classes - An array of style objects to add to the map.
     */
    addFrom(classes) {
      classes.forEach((style) => {
        const name = style.name;
        this.styles.set(name, style);
      });
    }
    /**
     * Sets a style value in the custom styles map.
     * @param name - The name of the style to set.
     * @param value - The value to set for the style.
     */
    set(name, value) {
      const v = this.get([name]);
      if (v)
        Object.assign(v, value);
      this.styles.set(name, value);
    }
    /**
     * Gets the style values for one or more style names combine in one object.
     * @param names - An array of style names to get.
     * @returns An object containing the style values.
     */
    get(names) {
      const returnStyles = {};
      names.forEach((n) => Object.assign(returnStyles, this.styles.get(n)));
      return returnStyles;
    }
    /**
     * Gets the value of a specific property for one or more style names.
     * @param names - An array of style names to get.
     * @param property - The name of the property to get.
     * @returns The value of the specified property.
     */
    getProperty(names, property) {
      const returnStyles = this.get(names);
      return returnStyles[property];
    }
    /**
     * Resets the custom styles map to its default values.
     */
    reset() {
      this.styles = new Map(this.default);
    }
    /**
     * Generates a random hexadecimal color code.
     * @returns A randomly generated hexadecimal color code.
     */
    static randomHexColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
  };
  Styles.TRANSFORMED_CLASS = "transform";

  // node_modules/rna-visualizer/dist/draw.js
  var Draw = class {
    /**
     * Draws an array of lines on the canvas context.
     * @param lines - An array of ILine objects to draw.
     * @param ctx - The canvas rendering context to draw on.
     * @param styles - An instance of the Styles class to use for styling the lines.
     */
    static Lines(lines, ctx, styles) {
      ctx.save();
      ctx.beginPath();
      for (const line of lines) {
        if (line.isVisible()) {
          const lineStyles = styles.get(line.getClasses());
          ctx.strokeStyle = lineStyles["stroke"] || "black";
          ctx.lineWidth = lineStyles["stroke-width"] || 1;
          ctx.moveTo(line.getTransformedX1(), line.getTransformedY1());
          ctx.lineTo(line.getTransformedX2(), line.getTransformedY2());
        }
      }
      ctx.stroke();
      ctx.restore();
    }
    /**
     * Draws an array of text objects on the canvas context.
     * @param texts - An array of Text objects to draw.
     * @param ctx - The canvas rendering context to draw on.
     * @param styles - An instance of the Styles class to use for styling the text.
     */
    static Texts(texts, ctx, styles) {
      ctx.save();
      const translate = /* @__PURE__ */ new Map([
        ["left", "left"],
        ["right", "right"],
        ["middle", "center"],
        ["start", "start"],
        ["end", "end"]
      ]);
      for (const text of texts) {
        if (!text.isVisible())
          continue;
        const textStyles = styles.get(text.getClasses());
        const fontSize = () => {
          const k = textStyles["k"] || 1;
          return textStyles["font-size"].slice(0, -2) * k + "px";
        };
        ctx.font = (textStyles["font-weight"] || "normal") + " " + (fontSize() || "6px") + " " + (textStyles["font-family"] || "Helvetica");
        ctx.fillStyle = textStyles["fill"] || "black";
        ctx.textAlign = translate.get(textStyles["text-anchor"] || "middle");
        ctx.textBaseline = textStyles["baseline"] || "middle";
        ctx.globalAlpha = textStyles["alpha"] || ctx.globalAlpha;
        ctx.fillText(text.getText(), text.getTransformedX(), text.getTransformedY());
      }
      ctx.restore();
    }
    /**
     * Draws an array of circles on the canvas context with alpha set to 1.
     * @param circles - An array of Circle objects to draw.
     * @param ctx - The canvas rendering context to draw on.
     * @param styles - An instance of the Styles class to use for styling the circles.
     */
    static Circles(circles, ctx, styles) {
      ctx.save();
      ctx.beginPath();
      for (const circle of circles) {
        if (!circle.isVisible())
          continue;
        const circleStyles = styles.get(circle.getClasses());
        ctx.strokeStyle = circleStyles["stroke"] || "black";
        ctx.fillStyle = circleStyles["fill"] || "white";
        ctx.lineWidth = circleStyles["stroke-width"] || 1;
        ctx.globalAlpha = 1;
        const r = circle.getScaledRadius();
        const x = circle.getTransformedX();
        const y = circle.getTransformedY();
        ctx.moveTo(x + r, y);
        ctx.arc(x, y, r, 0, 2 * Math.PI);
      }
      ctx.fill();
      ctx.restore();
    }
    /**
     * Draws a rectangle on the canvas context.
     * @param rectangle - The Rectangle object to draw.
     * @param ctx - The canvas rendering context to draw on.
     * @param styles - An instance of the Styles class to use for styling the rectangle.
     */
    static Rectangle(rectangle, ctx, styles) {
      ctx.save();
      const rectStyles = styles.get(rectangle.getClasses());
      ctx.strokeStyle = rectStyles["stroke"] || "black";
      ctx.fillStyle = rectStyles["fill"] || "white";
      ctx.globalAlpha = rectStyles["alpha"] || ctx.globalAlpha;
      ctx.fillRect(rectangle.getTransformedX(), rectangle.getTransformedY(), rectangle.getWidth(), rectangle.getHeight());
      ctx.restore();
    }
  };

  // node_modules/rna-visualizer/dist/components/residue.js
  var Residue = class {
    /**
     * Create a Residue.
     * @param name - The name of the residue.
     * @param index - The index of the residue.
     * @param templateName - The name of the template residue.
     * @param templateIndex - The index of the template residue.
     * @param circle - The Circle object representing the text background.
     * @param text - The Text object representing the residue name.
     */
    constructor(name, index, templateName, templateIndex, circle, text) {
      this.visible = true;
      this.name = name;
      this.index = index;
      this.templateIndex = templateIndex;
      this.templateName = templateName;
      this.circle = circle;
      this.text = text;
    }
    /**
     * Creates a Residue from IDataResidue object.
     * @param res - The IDataResidue object representing a residue.
     * @param styles - The Styles object representing the styles of the residue.
     * @returns A Residue object created from the given IDataResidue object.
     */
    static fromDataResidue(res, styles) {
      const textCoor = new Vector2(res.x, res.y);
      const classes = Object.assign([], res.classes);
      classes.push(Styles.TRANSFORMED_CLASS);
      const text = new Text(textCoor, res.residueName, classes);
      const circleCoor = new Vector2(res.x, res.y);
      const radius = Number(styles.getProperty(res.classes, "font-size").slice(0, -2)) * 0.75;
      const circle = new Circle(circleCoor, radius);
      return new Residue(res.residueName, res.residueIndex, res.templateResidueName, res.templateResidueIndex, circle, text);
    }
    /**
     * Sets the transformation for the Residue.
     * @param transform - The Transformation object representing the transformation to set.
     * @returns The Residue object.
     */
    setTransform(transform2) {
      this.text.setTransform(transform2);
      this.circle.setTransform(transform2);
      return this;
    }
    /**
     * Gets the transformed X coordinate of the Residue.
     * @returns The transformed X coordinate of the Residue.
     */
    getTransformedX() {
      return this.circle.getTransformedX();
    }
    /**
     * Gets the X coordinate of the Residue.
     * @returns The X coordinate of the Residue.
     */
    getX() {
      return this.circle.getX();
    }
    /**
     * Sets the X coordinate of the Residue.
     * @param x - The X coordinate to set.
     * @returns The Residue object.
     */
    setX(x) {
      this.circle.setX(x);
      this.text.setX(x);
      return this;
    }
    /**
     * Gets the transformed Y coordinate of the Residue.
     * @returns The transformed Y coordinate of the Residue.
     */
    getTransformedY() {
      return this.circle.getTransformedY();
    }
    /**
     * Gets the Y coordinate of the Residue.
     * @returns The Y coordinate of the Residue.
     */
    getY() {
      return this.circle.getY();
    }
    /**
     * Sets the Y coordinate of the Residue.
     * @param y - The Y coordinate to set.
     * @returns The Residue object.
     */
    setY(y) {
      this.circle.setY(y);
      this.text.setY(y);
      return this;
    }
    /**
     * Sets the coordinate of the Residue.
     * @param coor - The Vector2 object representing the coordinate to set.
     * @returns The Residue object.
     */
    setCoor(coor) {
      this.circle.setCoor(coor);
      this.text.setCoor(coor);
      return this;
    }
    /**
     * Gets the coordinate of the Residue.
     * @returns The Vector2 object representing the coordinate of the Residue.
     */
    getCoor() {
      return this.circle.getCoor();
    }
    /**
     * Gets the transformed coordinate of the Residue.
     * @returns The Vector2 object representing the transformed coordinate of the Residue.
     */
    getTransformedCoor() {
      return this.circle.getTransformedCoor();
    }
    /**
     * Sets the visibility of the Residue.
     * @param visible - The boolean value representing the visibility to set.
     * @returns The Residue object.
     */
    setVisible(visible) {
      this.circle.setVisible(visible);
      this.text.setVisible(visible);
      this.visible = visible;
      return this;
    }
    /**
     * Gets the visibility of the Residue.
     * @returns The boolean value representing the visibility of the Residue.
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Gets the classes of the Residue text.
     * @returns The array of strings representing the classes of the Residue text.
     */
    getClasses() {
      return this.text.getClasses();
    }
    /**
    * Translates the residue's circle and text by the given shift vector.
    *
    * @param shift - The vector to shift the residue's circle and text by.
    * @returns This Residue instance.
    */
    translate(shift) {
      this.circle.translate(shift);
      this.text.translate(shift);
      return this;
    }
  };

  // node_modules/rna-visualizer/dist/components/vector.js
  var Vector2 = class {
    /**
     * Creates a new Vector2 instance.
     * @param x - The x component of the vector.
     * @param y - The y component of the vector.
     */
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    /**
     * Adds the given vector to this vector.
     * @param vector - The vector to add.
     * @returns The sum of this vector and the given vector.
     */
    add(vector) {
      this.x += vector.x;
      this.y += vector.y;
      return this;
    }
    /**
     * Subtracts the given vector from this vector.
     * @param vector - The vector to subtract.
     * @returns The difference between this vector and the given vector.
     */
    subtract(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
      return this;
    }
    /**
     * Multiplies this vector by the given scalar.
     * @param k - The scalar to multiply by.
     * @returns This vector multiplied by the given scalar.
     */
    multiply(k) {
      this.x *= k;
      this.y *= k;
      return this;
    }
    /**
     * Returns the size (magnitude) of this vector.
     * @returns The size of this vector.
     */
    size() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    /**
     * Returns a copy of this vector.
     * @returns A copy of this vector.
     */
    copy() {
      return new Vector2(this.x, this.y);
    }
    /**
     * Returns the sum of the given vectors.
     * @param vector1 - The first vector.
     * @param vector2 - The second vector.
     * @returns The sum of the given vectors.
     */
    static sum(vector1, vector2) {
      return new Vector2(vector1.x, vector1.y).add(vector2);
    }
    /**
     * Returns the difference between the given vectors.
     * @param vector1 - The first vector.
     * @param vector2 - The second vector.
     * @returns The difference between the given vectors.
     */
    static subtraction(vector1, vector2) {
      return new Vector2(vector1.x, vector1.y).subtract(vector2);
    }
    /**
     * Returns the distance between the given vectors.
     * @param vector1 - The first vector.
     * @param vector2 - The second vector.
     * @returns The distance between the given vectors.
     */
    static distance(vector1, vector2) {
      return this.subtraction(vector1, vector2).size();
    }
  };
  Vector2.zero = new Vector2(0, 0);

  // node_modules/rna-visualizer/dist/components/transformation.js
  var identity4 = {
    /**
     * Applies the identity transformation to a given x-coordinate.
     *
     * @param x - The x-coordinate to apply the transformation to.
     * @returns The unmodified x-coordinate.
     */
    applyX: (x) => x,
    /**
     * Applies the identity transformation to a given y-coordinate.
     *
     * @param y - The y-coordinate to apply the transformation to.
     * @returns The unmodified y-coordinate.
     */
    applyY: (y) => y
  };

  // node_modules/rna-visualizer/dist/components/line.js
  var Line = class {
    /**
     * Create a new Line object.
     * @param coor1 - The first coordinate of the line segment.
     * @param coor2 - The second coordinate of the line segment.
     * @param classes - An array of classes for styling the line segment.
     */
    constructor(coor1, coor2, classes) {
      this.visible = true;
      this.transform = identity4;
      this.coor1 = coor1;
      this.coor2 = coor2;
      this.classes = classes;
    }
    /**
     * Set the transformation to apply to this line segment.
     * @param transform - The transformation to apply.
     * @returns This line segment, for chaining.
     */
    setTransform(transform2) {
      this.transform = transform2;
      return this;
    }
    /**
     * Get the transformed X coordinate of the first point of this line segment.
     * @returns The transformed X coordinate of the first point.
     */
    getTransformedX1() {
      return this.transform.applyX(this.coor1.x);
    }
    /**
     * Get the transformed Y coordinate of the first point of this line segment.
     * @returns The transformed Y coordinate of the first point.
     */
    getTransformedY1() {
      return this.transform.applyY(this.coor1.y);
    }
    /**
     * Get the transformed X coordinate of the second point of this line segment.
     * @returns The transformed X coordinate of the second point.
     */
    getTransformedX2() {
      return this.transform.applyX(this.coor2.x);
    }
    /**
     * Get the transformed Y coordinate of the second point of this line segment.
     * @returns The transformed Y coordinate of the second point.
     */
    getTransformedY2() {
      return this.transform.applyY(this.coor2.y);
    }
    /**
     * Set the X coordinate of the first point of this line segment.
     * @param x1 - The new X coordinate of the first point.
     * @returns This line segment, for chaining.
     */
    setX1(x1) {
      this.coor1.x = x1;
      return this;
    }
    /**
     * Get the X coordinate of the first point of this line segment.
     * @returns The X coordinate of the first point.
     */
    getX1() {
      return this.coor1.x;
    }
    /**
     * Set the Y coordinate of the first point of this line segment.
     * @param y1 - The new Y coordinate of the first point.
     * @returns This line segment, for chaining.
     */
    setY1(y1) {
      this.coor1.y = y1;
      return this;
    }
    /**
     * Get the Y coordinate of the first point of this line segment.
     * @returns The Y coordinate of the first point.
     */
    getY1() {
      return this.coor1.y;
    }
    /**
     * Set the X coordinate of the second point of this line segment.
     * @param x2 - The new X coordinate of the second point.
     * @returns This line segment, for chaining.
     */
    setX2(x2) {
      this.coor2.x = x2;
      return this;
    }
    /**
     * Gets the x-coordinate of the second point of the line.
     */
    getX2() {
      return this.coor2.x;
    }
    /**
     * Sets the Y coordinate of the second point of the line.
     * @param y2 - The new Y coordinate.
     */
    setY2(y2) {
      this.coor2.y = y2;
      return this;
    }
    /**
     * Gets the Y coordinate of the second point of the line.
     */
    getY2() {
      return this.coor2.y;
    }
    /**
     * Sets the first point of the line to the given Vector2.
     * @param coor - The new coordinates.
     */
    setCoor1(coor) {
      this.coor1 = coor;
      return this;
    }
    /**
     * Gets a copy of the first point of the line as a Vector2.
     */
    getCoor1() {
      return this.coor1.copy();
    }
    /**
     * Sets the second point of the line to the given Vector2.
     * @param coor - The new coordinates.
     */
    setCoor2(coor) {
      this.coor2 = coor;
      return this;
    }
    /**
     * Gets a copy of the second point of the line as a Vector2.
     */
    getCoor2() {
      return this.coor2.copy();
    }
    /**
     * Sets the visibility of the line.
     * @param visible - True if the line should be visible, false otherwise.
     */
    setVisible(visible) {
      this.visible = visible;
      return this;
    }
    /**
     * Gets the visibility of the line.
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Gets the classes applied to the line.
     */
    getClasses() {
      return this.classes;
    }
    /**
     * Translates the line by the given Vector2.
     * @param shift - The Vector2 to translate by.
     */
    translate(shift) {
      this.coor1.add(shift);
      this.coor2.add(shift);
      return this;
    }
  };

  // node_modules/rna-visualizer/dist/components/basePair.js
  var BasePair = class {
    /**
     * Creates a new instance of BasePair.
     * @param residue1 - The first residue of the base pair.
     * @param residue2 - The second residue of the base pair.
     * @param classes - The classes associated with the base pair.
     */
    constructor(residue1, residue2, classes) {
      this.residue1 = residue1;
      this.residue2 = residue2;
      this.classes = classes;
    }
    /**
     * Gets the x coordinate of the first residue after transformation.
     * @returns The x coordinate of the first residue after transformation.
     */
    getTransformedX1() {
      return this.residue1.getTransformedX();
    }
    /**
     * Gets the y coordinate of the first residue after transformation.
     * @returns The y coordinate of the first residue after transformation.
     */
    getTransformedY1() {
      return this.residue1.getTransformedY();
    }
    /**
     * Gets the x coordinate of the second residue after transformation.
     * @returns The x coordinate of the second residue after transformation.
     */
    getTransformedX2() {
      return this.residue2.getTransformedX();
    }
    /**
     * Gets the y coordinate of the second residue after transformation.
     * @returns The y coordinate of the second residue after transformation.
     */
    getTransformedY2() {
      return this.residue2.getTransformedY();
    }
    /**
     * Gets the x coordinate of the first residue.
     * @returns The x coordinate of the first residue.
     */
    getX1() {
      return this.residue1.getX();
    }
    /**
     * Gets the y coordinate of the first residue.
     * @returns The y coordinate of the first residue.
     */
    getY1() {
      return this.residue1.getY();
    }
    /**
     * Gets the x coordinate of the second residue.
     * @returns The x coordinate of the second residue.
     */
    getX2() {
      return this.residue2.getX();
    }
    /**
     * Gets the y coordinate of the second residue.
     * @returns The y coordinate of the second residue.
     */
    getY2() {
      return this.residue2.getY();
    }
    /**
     * Determines whether the base pair is visible.
     * @returns Whether the base pair is visible.
     */
    isVisible() {
      return this.residue1.isVisible() && this.residue2.isVisible();
    }
    /**
     * Gets the classes associated with the base pair.
     * @returns The classes associated with the base pair.
     */
    getClasses() {
      return this.classes;
    }
  };

  // node_modules/rna-visualizer/dist/components/label.js
  var Label = class {
    /**
    * @param residue - Residue to which the label is attached.
    * @param line - Line component of the label.
    * @param text - Text component of the label.
    */
    constructor(residue, line, text) {
      this.visible = true;
      this.residue = residue;
      this.line = line;
      this.text = text;
    }
    /**
    * @param transform - Transformation to apply to the label.
    */
    setTransform(transform2) {
      this.line.setTransform(transform2);
      this.text.setTransform(transform2);
      return this;
    }
    /**
    * @param visible - Whether the label should be visible.
    */
    setVisible(visible) {
      this.line.setVisible(visible);
      this.text.setVisible(visible);
      this.visible = visible;
      return this;
    }
    /**
    * @returns Whether the label is visible.
    */
    isVisible() {
      return this.visible && this.residue.isVisible();
    }
    /**
    * @param shift - Vector to translate the label by.
    * @returns The label.
    */
    translate(shift) {
      this.line.translate(shift);
      this.text.translate(shift);
      return this;
    }
  };

  // node_modules/rna-visualizer/dist/components/circle.js
  var Circle = class {
    /**
     * Creates a new circle.
     * @param coor - The center coordinates of the circle.
     * @param radius - The radius of the circle.
     */
    constructor(coor, radius) {
      this.scale = 1;
      this.visible = true;
      this.transform = identity4;
      this.coor = coor;
      this.radius = radius;
    }
    /**
     * Sets a transformation for the circle.
     * @param transform - The transformation to set.
     * @returns The circle object.
     */
    setTransform(transform2) {
      this.transform = transform2;
      return this;
    }
    /**
     * Gets the transformed X coordinate of the circle center.
     * @returns The transformed X coordinate.
     */
    getTransformedX() {
      return this.transform.applyX(this.coor.x);
    }
    /**
     * Gets the X coordinate of the circle center.
     * @returns The X coordinate.
     */
    getX() {
      return this.coor.x;
    }
    /**
     * Sets the X coordinate of the circle center.
     * @param x - The X coordinate to set.
     * @returns The circle object.
     */
    setX(x) {
      this.coor.x = x;
      return this;
    }
    /**
     * Gets the transformed Y coordinate of the circle center.
     * @returns The transformed Y coordinate.
     */
    getTransformedY() {
      return this.transform.applyY(this.coor.y);
    }
    /**
     * Gets the Y coordinate of the circle center.
     * @returns The Y coordinate.
     */
    getY() {
      return this.coor.y;
    }
    /**
     * Sets the Y coordinate of the circle center.
     * @param y - The Y coordinate to set.
     * @returns The circle object.
     */
    setY(y) {
      this.coor.y = y;
      return this;
    }
    /**
     * Sets the center coordinates of the circle.
     * @param coor - The center coordinates to set.
     * @returns The circle object.
     */
    setCoor(coor) {
      this.coor = coor;
      return this;
    }
    /**
     * Gets the center coordinates of the circle.
     * @returns A copy of the center coordinates as a Vector2 object.
     */
    getCoor() {
      return this.coor.copy();
    }
    /**
     * Gets the transformed center coordinates of the circle.
     * @returns The transformed center coordinates as a Vector2 object.
     */
    getTransformedCoor() {
      return new Vector2(this.getTransformedX(), this.getTransformedY());
    }
    /**
     * Gets the scaled radius of the circle.
     * @returns The scaled radius.
     */
    getScaledRadius() {
      return this.scale * this.radius;
    }
    /**
     * Sets the scaling factor of the circle.
     * @param scale - The scaling factor to set.
     * @returns The circle object.
     */
    setScale(scale) {
      this.scale = scale;
      return this;
    }
    /**
     * Sets the visibility of the circle.
     * @param visible - The visibility to set.
     * @returns The circle object.
     */
    setVisible(visible) {
      this.visible = visible;
      return this;
    }
    /**
     * Determines whether the circle is visible.
     * @returns Whether the circle is visible.
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Gets the classes associated with the circle.
     * @returns The classes associated with the circle.
     */
    getClasses() {
      return ["circle"];
    }
    /**
     * Translates the circle by the given vector.
     * @param shift - The vector by which to translate the circle.
     * @returns The circle object.
     */
    translate(shift) {
      this.coor.add(shift);
      return this;
    }
  };

  // node_modules/rna-visualizer/dist/components/text.js
  var Text = class {
    /**
     * Creates a new Text object.
     * @param coor - The initial position of the object.
     * @param text - The text content of the object.
     * @param classes - An array of classes for styling the text.
     */
    constructor(coor, text, classes) {
      this.visible = true;
      this.transform = identity4;
      this.classes = classes;
      this.coor = coor;
      this.text = text;
    }
    /**
     * Sets the transformation applied to the object.
     * @param transform - The transformation to apply.
     * @returns The Text object.
     */
    setTransform(transform2) {
      this.transform = transform2;
      return this;
    }
    /**
     * Returns the transformed x-coordinate of the object.
     * @returns The transformed x-coordinate.
     */
    getTransformedX() {
      return this.transform.applyX(this.coor.x);
    }
    /**
     * Returns the x-coordinate of the object.
     * @returns The x-coordinate.
     */
    getX() {
      return this.coor.x;
    }
    /**
     * Sets the x-coordinate of the object.
     * @param x - The x-coordinate to set.
     * @returns The Text object.
     */
    setX(x) {
      this.coor.x = x;
      return this;
    }
    /**
     * Returns the transformed y-coordinate of the object.
     * @returns The transformed y-coordinate.
     */
    getTransformedY() {
      return this.transform.applyY(this.coor.y);
    }
    /**
     * Returns the y-coordinate of the object.
     * @returns The y-coordinate.
     */
    getY() {
      return this.coor.y;
    }
    /**
     * Sets the y-coordinate of the object.
     * @param y - The y-coordinate to set.
     * @returns The Text object.
     */
    setY(y) {
      this.coor.y = y;
      return this;
    }
    /**
     * Sets the position of the object.
     * @param coor - The position to set.
     * @returns The Text object.
     */
    setCoor(coor) {
      this.coor = coor;
      return this;
    }
    /**
     * Returns a copy of the position vector of the object.
     * @returns The position vector.
     */
    getCoor() {
      return this.coor.copy();
    }
    /**
     * Sets whether the object is visible.
     * @param visible - Whether the object is visible.
     * @returns The Text object.
     */
    setVisible(visible) {
      this.visible = visible;
      return this;
    }
    /**
     * Returns whether the object is visible.
     * @returns Whether the object is visible.
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Returns the text content of the object.
     * @returns The text content.
     */
    getText() {
      return this.text;
    }
    /**
     * Returns the classes which are used to style the object.
     * @returns The classes.
     */
    getClasses() {
      return this.classes;
    }
    /**
     * Returns the width of the text in pixels, given a set of styles.
     * @param styles - The styles to use.
     * @returns The width of the text in pixels.
     */
    width(styles) {
      const textStyles = styles.get(this.classes);
      const fontSize = () => {
        const k = textStyles["k"] || 1;
        return textStyles["font-size"].slice(0, -2) * k + "px";
      };
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.font = (textStyles["font-weight"] || "normal") + " " + (fontSize() || "6px") + " " + (textStyles["font-family"] || "Helvetica");
      return ctx.measureText(this.text).width;
    }
    /**
     * Translates the position of the object by a given shift vector.
     * @param shift - The shift vector.
     * @returns The Text object.
     */
    translate(shift) {
      this.coor.add(shift);
      return this;
    }
  };

  // node_modules/rna-visualizer/dist/components/rectangle.js
  var Rectangle = class {
    /**
     * Creates a new rectangle with the given parameters.
     * @param coor - The coordinate of the rectangle.
     * @param width - The width of the rectangle.
     * @param height - The height of the rectangle.
     * @param classes - An array of classes for styling the rectangle.
     */
    constructor(coor, width, height, classes) {
      this.visible = true;
      this.transform = identity4;
      this.classes = classes;
      this.coor = coor;
      this.width = width;
      this.height = height;
    }
    /**
     * Sets the transformation to be applied to the rectangle.
     * @param transform - The transformation to be applied to the rectangle.
     * @returns The modified rectangle.
     */
    setTransform(transform2) {
      this.transform = transform2;
      return this;
    }
    /**
     * Returns the transformed X coordinate of the rectangle.
     * @returns The transformed X coordinate of the rectangle.
     */
    getTransformedX() {
      return this.transform.applyX(this.coor.x);
    }
    /**
     * Returns the X coordinate of the rectangle.
     * @returns The X coordinate of the rectangle.
     */
    getX() {
      return this.coor.x;
    }
    /**
     * Sets the X coordinate of the rectangle.
     * @param x - The new X coordinate of the rectangle.
     * @returns The modified rectangle.
     */
    setX(x) {
      this.coor.x = x;
      return this;
    }
    /**
     * Returns the transformed Y coordinate of the rectangle.
     * @returns The transformed Y coordinate of the rectangle.
     */
    getTransformedY() {
      return this.transform.applyY(this.coor.y);
    }
    /**
     * Returns the Y coordinate of the rectangle.
     * @returns The Y coordinate of the rectangle.
     */
    getY() {
      return this.coor.y;
    }
    /**
     * Sets the Y coordinate of the rectangle.
     * @param y - The new Y coordinate of the rectangle.
     * @returns The modified rectangle.
     */
    setY(y) {
      this.coor.y = y;
      return this;
    }
    /**
     * Sets the coordinate of the rectangle.
     * @param coor - The new coordinate of the rectangle.
     * @returns The modified rectangle.
     */
    setCoor(coor) {
      this.coor = coor;
      return this;
    }
    /**
     * Gets the coordinates of the rectangle.
     * @returns - A copy of the coordinates of the rectangle as a `Vector2` object.
     */
    getCoor() {
      return this.coor.copy();
    }
    /**
     * Sets the visibility of the rectangle.
     * @param visible - A boolean indicating the visibility of the rectangle.
     * @returns - The current `Rectangle` object.
     */
    setVisible(visible) {
      this.visible = visible;
      return this;
    }
    /**
     * Gets the visibility of the rectangle.
     * @returns - A boolean indicating the visibility of the rectangle.
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Gets the width of the rectangle.
     * @returns - The width of the rectangle as a number.
     */
    getWidth() {
      return this.width;
    }
    /**
     * Gets the height of the rectangle.
     * @returns - The height of the rectangle as a number.
     */
    getHeight() {
      return this.height;
    }
    /**
     * Gets the classes associated with the rectangle.
     * @returns - An array of strings representing the classes associated with the rectangle.
     */
    getClasses() {
      return this.classes;
    }
    /**
     * Translates the rectangle by the given vector.
     * @param shift - A `Vector2` object representing the amount to translate the rectangle.
     * @returns - The current `Rectangle` object.
     */
    translate(shift) {
      this.coor.add(shift);
      return this;
    }
  };

  // node_modules/rna-visualizer/dist/components/mappingLine.js
  var MappingLine = class {
    /**
     * Constructs a MappingLine object
     * @param residue1 - the first residue object
     * @param residue2 - the second residue object
     * @param classes - an array of strings representing the classes of the MappingLine object for styling the line.
     */
    constructor(residue1, residue2, classes) {
      this.visible = false;
      this.residue1 = residue1;
      this.residue2 = residue2;
      this.classes = classes;
    }
    /**
     * Gets the transformed X coordinate of the first residue
     * @returns a number representing the transformed X coordinate of the first residue
     */
    getTransformedX1() {
      return this.residue1.getTransformedX();
    }
    /**
     * Gets the transformed Y coordinate of the first residue
     * @returns a number representing the transformed Y coordinate of the first residue
     */
    getTransformedY1() {
      return this.residue1.getTransformedY();
    }
    /**
     * Gets the transformed X coordinate of the second residue
     * @returns a number representing the transformed X coordinate of the second residue
     */
    getTransformedX2() {
      return this.residue2.getTransformedX();
    }
    /**
     * Gets the transformed Y coordinate of the second residue
     * @returns a number representing the transformed Y coordinate of the second residue
     */
    getTransformedY2() {
      return this.residue2.getTransformedY();
    }
    /**
     * Gets the X coordinate of the first residue
     * @returns a number representing the X coordinate of the first residue
     */
    getX1() {
      return this.residue1.getX();
    }
    /**
     * Gets the Y coordinate of the first residue
     * @returns a number representing the Y coordinate of the first residue
     */
    getY1() {
      return this.residue1.getY();
    }
    /**
     * Gets the X coordinate of the second residue
     * @returns a number representing the X coordinate of the second residue
     */
    getX2() {
      return this.residue2.getX();
    }
    /**
     * Gets the Y coordinate of the second residue
     * @returns a number representing the Y coordinate of the second residue
     */
    getY2() {
      return this.residue2.getY();
    }
    /**
     * Sets the visibility of the MappingLine object
     * @param visible - a boolean value representing the visibility of the MappingLine object
     */
    setVisible(visible) {
      this.visible = visible;
    }
    /**
     * Gets the visibility of the MappingLine object
     * @returns a boolean value representing the visibility of the MappingLine object
     */
    isVisible() {
      return this.visible;
    }
    /**
     * Gets an array of strings representing the classes of the MappingLine object
     * @returns an array of strings representing the classes of the MappingLine object
     */
    getClasses() {
      return this.classes;
    }
    /**
    * Creates MappingLine objects for each residue pair that can be mapped between template and derived container.
    * @param template - The DataContainer representing the template structure.
    * @param container - The DataContainer representing the derived structure.
    * @param classes - (Optional) An array of strings to set as the classes property for each MappingLine object.
    * @returns An array of MappingLine objects representing the residue mappings between template and derived container.
    */
    static createMappingLines(template, container, classes = ["mapping-line"]) {
      const mappingLines = [];
      container.getMappableResidues().forEach((res) => {
        const tempRes = template.residues[res.templateIndex];
        const mp = new MappingLine(tempRes, res, classes);
        mappingLines.push(mp);
      });
      return mappingLines;
    }
  };

  // node_modules/rna-visualizer/dist/components/title.js
  var Title = class {
    /**
     * Creates a new Title object.
     * @param texts - An array of Text objects to be displayed as the title text.
     * @param background - The Rectangle object representing the background of the title.
     * @param styles - The styles to be applied to the title.
     */
    constructor(texts, background, styles) {
      this.texts = texts;
      this.background = background;
      this.styles = styles;
    }
    /**
     * Gets the Text objects of the Title.
     * @returns An array of Text objects.
     */
    getTexts() {
      return this.texts;
    }
    /**
     * Gets the background Rectangle of the Title.
     * @returns The background Rectangle object.
     */
    getBackground() {
      return this.background;
    }
    /**
     * Draws the Title using the given CanvasRenderingContext2D.
     * @param ctx - The CanvasRenderingContext2D to use for drawing.
     */
    draw(ctx) {
      Draw.Rectangle(this.background, ctx, this.styles);
      Draw.Texts(this.texts, ctx, this.styles);
    }
    /**
     * Creates a new Title object from an array of Residue objects.
     * @param residues - An array of Residue objects to be used for creating the title.
     * @param canvasWidth - The width of the canvas the title will be drawn on.
     * @param canvasHeight - The height of the canvas the title will be drawn on.
     * @param styles - The styles to be applied to the title.
     * @returns A new Title object.
     */
    static fromResidues(residues, canvasWidth, canvasHeight, styles) {
      const rightMostRes = Math.max(...residues.map((res) => res.getTransformedX()));
      const topMostRes = Math.min(...residues.map((res) => res.getTransformedY()));
      const margin = residues[0].circle.getScaledRadius();
      const padding = 3;
      const textHeight = +styles.getProperty(["title-text"], "font-size").slice(0, -2);
      let x = rightMostRes + margin + padding;
      let y = topMostRes - margin + padding;
      const texts = residues.map((res, i) => {
        const text = `${res.index}.${res.name} (position.label in template: ${res.templateIndex}.${res.templateName})`;
        return new Text(new Vector2(x, y + i * textHeight), text, ["title-text"]);
      });
      const textWidth = Math.max(...texts.map((t) => t.width(styles)));
      const titleWidth = textWidth + 2 * padding;
      const titleHeight = texts.length * textHeight + 2 * padding;
      let rectX = rightMostRes + margin;
      let rectY = topMostRes - margin;
      if (x + textWidth > canvasWidth) {
        const leftMostRes = Math.min(...residues.map((res) => res.getTransformedX()));
        x = leftMostRes - margin - padding - textWidth;
        texts.forEach((t) => t.setX(x));
        rectX = leftMostRes - margin - titleWidth;
      }
      if (y + titleHeight > canvasHeight) {
        const bottomMostRes = Math.max(...residues.map((res) => res.getTransformedY()));
        y = bottomMostRes - margin - titleHeight + padding;
        texts.forEach((t, i) => t.setY(y + i * textHeight));
        rectY = bottomMostRes - margin - titleHeight;
      }
      const background = new Rectangle(new Vector2(rectX, rectY), titleWidth, titleHeight, ["title-background"]);
      return new Title(texts, background, styles);
    }
  };

  // node_modules/rna-visualizer/dist/components/layer.js
  var Layer = class {
    /**
    * @param data - The data container for the layer
    * @param name - The name of the layer
    * @param mappingLines - The mapping lines for the layer
    * @param visible - Whether the layer is visible or not
    */
    constructor(data, name, mappingLines, visible = true) {
      this.visible = true;
      this.name = name;
      this.data = data;
      this.mappingLines = mappingLines;
      this.visible = visible;
    }
  };

  // node_modules/rna-visualizer/dist/data/dataContainer.js
  var DataContainer = class {
    /**
     * Initializes a new instance of the DataContainer class.
     * @param residues - The residues to render.
     * @param basePairs - The base pairs to render.
     * @param labels - The labels to render.
     * @param styles - The styles to apply.
     */
    constructor(residues, basePairs, labels, styles) {
      this.residues = residues;
      this.basePairs = basePairs;
      this.labels = labels;
      this.styles = styles;
    }
    /**
     * Gets an array of ILine objects that represent the lines to render.
     * @returns An array of ILine objects.
     */
    getLines() {
      return this.basePairs.concat(this.labels.map((l) => l.line));
    }
    /**
     * Gets an array of Text objects that represent the text to render.
     * @returns An array of Text objects.
     */
    getText() {
      return this.residues.map((r) => r.text).concat(this.labels.map((l) => l.text));
    }
    /**
     * Gets an array of Circle objects that represent the circles to render.
     * @returns An array of Circle objects.
     */
    getCircles() {
      return this.residues.map((r) => r.circle);
    }
    /**
     * Updates the visualization with the specified event.
     * @param event - The event to use for the update.
     */
    update(event) {
      const width = this.width;
      const height = this.height;
      const x = linear2().domain([0, width]).range([0, width]);
      const y = linear2().domain([0, height]).range([0, height]);
      x.range([0, width].map((d) => event.transform.applyX(d)));
      y.range([0, height].map((d) => event.transform.applyY(d)));
      const transform2 = { applyX: x, applyY: y };
      this.residues.forEach((res) => {
        res.setTransform(transform2);
        res.circle.setScale(event.transform.k);
      });
      this.labels.forEach((label) => {
        label.setTransform(transform2);
      });
      this.styles.set(Styles.TRANSFORMED_CLASS, { k: event.transform.k });
    }
    /**
     * Gets the residue at the specified coordinates.
     * @param x - The x-coordinate.
     * @param y - The y-coordinate.
     * @returns The residue at the specified coordinates, or null if no such residue exists.
     */
    getResByCoor(x, y) {
      let result = null;
      this.residues.find((res) => {
        const resStyles = this.styles.get(res.getClasses());
        const k = resStyles["k"] || 1;
        const shift = (+resStyles["font-size"].slice(0, -2) || 7) * k / 2;
        if (x >= res.getTransformedX() - shift && x <= res.getTransformedX() + shift && y >= res.getTransformedY() - shift && y <= res.getTransformedY() + shift) {
          result = res;
        }
      });
      return result;
    }
    /**
     * Gets the closest residue to the specified coordinates within the specified maximum distance.
     * @param x - The x-coordinate.
     * @param y - The y-coordinate.
     * @param maxDistance - The maximum distance from the specified coordinates.
     * @returns The closest residue to the specified coordinates within the specified maximum distance, or null if no such residue exists.
     */
    getClosestResByCoor(x, y, maxDistance = 100) {
      let result = null;
      let resultDistance = Number.MAX_SAFE_INTEGER;
      const clickPosition = new Vector2(x, y);
      this.residues.forEach((res) => {
        const resCoor = res.getTransformedCoor();
        const distance = Vector2.distance(clickPosition, resCoor);
        if (distance < resultDistance) {
          result = res;
          resultDistance = distance;
        }
      });
      result = resultDistance <= maxDistance ? result : null;
      return result;
    }
    /**
     * Gets an array of residues that cannot be mapped to a template.
     * @returns An array of unmappable residues.
     */
    getUnmappableResidues() {
      return this.residues.filter((res) => res.templateIndex === -1);
    }
    /**
     * Gets an array of residues that can be mapped to a template.
     * @returns An array of mappable residues.
     */
    getMappableResidues() {
      return this.residues.filter((res) => res.templateIndex !== -1);
    }
    /**
     * Translates the objects by the specified amount.
     * @param shift - The amount to translate the visualization.
     */
    translate(shift) {
      this.residues.forEach((res) => {
        res.translate(shift);
      });
      this.labels.forEach((label) => {
        label.translate(shift);
      });
    }
  };

  // node_modules/rna-visualizer/dist/data/containerFactory.js
  var ContainerFactory = class {
    /**
    * Creates a DataContainer object for the RNA visualization.
    * @param data - The RNA input data.
    * @param styles - The styles to apply to the visualization.
    * @returns A DataContainer object representing the IRnaInput data with given styles.
    */
    static create(data, styles) {
      this.basePairs = [];
      this.labels = [];
      this.residues = [];
      this.data = data;
      this.styles = styles;
      this.addResidues();
      this.addBasePairs();
      this.addLabels();
      this.addMargin();
      this.container = new DataContainer(this.residues, this.basePairs, this.labels, styles);
      this.setDimensions();
      return this.container;
    }
    static addMargin() {
      const shift = new Vector2(this.margin, this.margin);
      this.residues.forEach((res) => {
        res.translate(shift);
      });
      this.labels.forEach((label) => {
        label.translate(shift);
      });
    }
    static setDimensions() {
      const residues = this.data.rnaComplexes[0].rnaMolecules[0].sequence;
      let width = Number.MIN_VALUE;
      let height = Number.MIN_VALUE;
      for (const res of residues) {
        if (res.x > width)
          width = res.x;
        if (res.y > height)
          height = res.y;
      }
      this.container.width = Math.round(2 * this.margin + width);
      this.container.height = Math.round(2 * this.margin + height);
    }
    static addBasePairs() {
      const rna = this.data.rnaComplexes[0].rnaMolecules[0];
      rna.basePairs.forEach((bp) => {
        const classes = Object.assign([], bp.classes);
        const basePair = new BasePair(this.residues[bp.residueIndex1], this.residues[bp.residueIndex2], classes);
        this.basePairs.push(basePair);
      });
      for (let i = 1; i < this.residues.length; ++i) {
        const basePair = new BasePair(this.residues[i - 1], this.residues[i], ["bp-line", "res-line"]);
        this.basePairs.push(basePair);
      }
    }
    static addResidues() {
      const sequenceData = this.data.rnaComplexes[0].rnaMolecules[0].sequence;
      sequenceData.forEach((res) => {
        const residue = Residue.fromDataResidue(res, this.styles);
        this.residues.push(residue);
      });
    }
    static addLabels() {
      const labelData = this.data.rnaComplexes[0].rnaMolecules[0].labels;
      labelData.forEach((label) => {
        const coor1 = new Vector2(label.labelLine.x1, label.labelLine.y1);
        const coor2 = new Vector2(label.labelLine.x2, label.labelLine.y2);
        const lineClasses = Object.assign([], label.labelLine.classes);
        const line = new Line(coor1, coor2, lineClasses);
        const coor = new Vector2(label.labelContent.x, label.labelContent.y);
        const textClasses = Object.assign([], label.labelContent.classes);
        textClasses.push(Styles.TRANSFORMED_CLASS);
        const text = new Text(coor, label.labelContent.label, textClasses);
        const res = this.residues[label.residueIndex];
        const l = new Label(res, line, text);
        this.labels.push(l);
      });
    }
  };
  ContainerFactory.margin = 10;

  // node_modules/rna-visualizer/dist/data/translationGroup.js
  var TranslationGroup = class {
    /**
     * Creates a translation group.
     * @param x - The x shift.
     * @param y - The y shift.
     * @param member - The member residue.
     */
    constructor(x, y, member) {
      this.xShift = x;
      this.yShift = y;
      this.members = [member];
    }
    /**
     * Adds a member residue to the group.
     * @param member - The member residue to add.
     */
    push(member) {
      this.members.push(member);
    }
    /**
     * Returns the number of members in the group.
     * @returns The number of members in the group.
     */
    size() {
      return this.members.length;
    }
    /**
     * Returns whether the group has a member residue with the given index.
     * @param index - The index to check for.
     * @returns Whether the group has a member residue with the given index.
     */
    has(index) {
      return this.members.some((res) => res.index === index);
    }
  };

  // node_modules/rna-visualizer/dist/data/translationGroups.js
  var TranslationGroups = class {
    /**
    * Creates TranslationGroups from two DataContainers, optionally filtered by a specific group and a minimum size.
    * @param contA - The first DataContainer.
    * @param contB - The second DataContainer.
    * @param group - Optional TranslationGroup to filter by.
    * @param filter - Minimum size for generated TranslationGroups.
    * @returns An array of TranslationGroups.
    */
    static create(contA, contB, group = null, filter2 = 5) {
      const tempRes = contA.residues;
      const shifts = /* @__PURE__ */ new Map();
      contB.residues.forEach((res) => {
        if (res.templateIndex !== -1 && (group === null || group.has(res.templateIndex))) {
          const tRes = tempRes[res.templateIndex];
          const x = Math.round(tRes.getX() - res.getX());
          const y = Math.round(tRes.getY() - res.getY());
          const key = x + "," + y;
          if (shifts.has(key)) {
            shifts.get(key).push(tRes);
          } else {
            shifts.set(key, new TranslationGroup(x, y, tRes));
          }
        }
      });
      const groups = Array.from(shifts.values()).filter((group2) => group2.size() > filter2);
      return groups;
    }
    /**
    * Returns the largest TranslationGroup from an array of TranslationGroups.
    * @param groups - The array of TranslationGroups to search.
    * @returns The largest TranslationGroup.
    */
    static getBest(groups) {
      let bestGroup = groups[0];
      groups.forEach((group) => {
        if (group.size() > bestGroup.size()) {
          bestGroup = group;
        }
      });
      return bestGroup;
    }
  };

  // node_modules/rna-visualizer/dist/rna-vis.js
  var RnaVis = class {
    /**
     * Constructs a new RnaVis instance with the specified canvas element.
     * @param canvas - The canvas element to render the RNA secondary structures on.
     */
    constructor(canvas2) {
      this.styles = new Styles();
      this.layers = new Array();
      this.zoom = zoom_default2();
      this.canvas = canvas2;
    }
    /**
     * Adds zoom behavior to the canvas element.
     * @returns This RnaVis instance.
     */
    addZoom() {
      this.zoom.scaleExtent([0, 10]).on("zoom", (event) => {
        this.layers.forEach((layer) => layer.data.update(event));
        this.draw();
      });
      select_default2(this.canvas).call(this.zoom);
      return this;
    }
    /**
     * Renders the RNA secondary structures on the canvas element.
     */
    draw() {
      const ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.layers.forEach((layer) => {
        if (layer.visible) {
          Draw.Lines(layer.data.getLines(), ctx, layer.data.styles);
          Draw.Lines(layer.mappingLines, ctx, this.styles);
        }
      });
      this.layers.forEach((layer) => {
        if (layer.visible) {
          Draw.Circles(layer.data.getCircles(), ctx, layer.data.styles);
        }
      });
      this.layers.forEach((layer) => {
        if (layer.visible) {
          Draw.Texts(layer.data.getText(), ctx, layer.data.styles);
        }
      });
    }
    /**
     * Draws the hover label for the specified coordinates.
     * @param x - The x-coordinate of the mouse pointer.
     * @param y - The y-coordinate of the mouse pointer.
     */
    drawHoverLabel(x, y) {
      const residues = this.layers.filter((layer) => layer.visible).map((layer) => layer.data.getResByCoor(x, y)).filter((res) => res !== null);
      if (residues.length > 0) {
        const title = Title.fromResidues(residues, this.canvas.width, this.canvas.height, this.styles);
        const ctx = this.canvas.getContext("2d");
        title.draw(ctx);
      }
    }
    /**
     * Adds a new layer for the specified RNA secondary structure
     * @param data - The input data for the RNA secondary structure.
     * @param name - The name to use for the new layer.
     * @param visible - Whether the new layer should be visible.
     */
    addLayer(data, name, visible = true) {
      this.styles.addFrom(data.classes);
      const cont = ContainerFactory.create(data, this.styles);
      let mappingLines = [];
      if (this.layers.length > 0) {
        const mappingName = name + "mapping-line";
        const color2 = Styles.randomHexColor();
        this.styles.set(mappingName, { stroke: color2 });
        mappingLines = MappingLine.createMappingLines(this.layers[0].data, cont, [mappingName]);
      }
      const newLayer = new Layer(cont, name, mappingLines, visible);
      this.layers.push(newLayer);
      const alpha = this.getDefaultAlpha();
      this.setAlpha(alpha);
      return this;
    }
    /**
     * Clears all layers and styles from the RnaVis instance, clears canvas and reset zoom.
     */
    clear() {
      this.styles.reset();
      this.layers.length = 0;
      this.resetTransform();
      const ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    /**
     * Creates translation vectors for aligning the RNA secondary structures to the template.
     * @param groupIndex - The index of the generated translation group to use for alignment.
     * @param minGroupSize - The minimum size of a translation group.
     * @returns An array of translation vectors for each RNA secondary structure.
     * @throws An error if the groupIndex is greater than a number of groups.
     */
    align(groupIndex = -1, minGroupSize = 5) {
      const translations = [new Vector2(0, 0)];
      if (this.layers.length < 2) {
        return translations;
      }
      const layers = this.layers;
      const containers = this.getDataContainers();
      let groups = TranslationGroups.create(containers[0], containers[1], null, minGroupSize);
      if (groupIndex >= groups.length) {
        throw new Error("groupIndex >= groups.length");
      }
      const group = groupIndex < 0 ? TranslationGroups.getBest(groups) : groups[groupIndex];
      if (group) {
        translations.push(new Vector2(group.xShift, group.yShift));
        for (let i = 2; i < layers.length; ++i) {
          groups = TranslationGroups.create(layers[0].data, layers[i].data, group);
          if (groups.length > 0) {
            const bestGroup = TranslationGroups.getBest(groups);
            translations.push(new Vector2(bestGroup.xShift, bestGroup.yShift));
          } else {
            groups = TranslationGroups.create(layers[0].data, layers[i].data);
            const bestGroup = TranslationGroups.getBest(groups);
            translations.push(new Vector2(bestGroup.xShift, bestGroup.yShift));
          }
        }
      }
      return translations;
    }
    /**
     * Gets the translation vectors for aligning the RNA secondary structures
     * to the specified template residue.
     * @param tempRes - The template residue to align the RNA secondary structures to.
     * @returns An array of translation vectors for each RNA secondary structure.
     */
    getAlignmentToTempResidue(tempRes) {
      const translations = [Vector2.zero];
      const containers = this.getDataContainers();
      for (let i = 1; i < containers.length; ++i) {
        const residue = containers[i].residues.find((res) => res.templateIndex === tempRes.index);
        if (residue) {
          translations.push(Vector2.subtraction(tempRes.getCoor(), residue.getCoor()));
        } else {
          translations.push(Vector2.zero);
        }
      }
      return translations;
    }
    /**
     * Gets the index of the layer with the specified name.
     * @param name - The name of the layer.
     * @returns The index of the layer, or -1 if the layer was not found.
     */
    getLayerIndex(name) {
      return this.layers.map((layer) => layer.name).indexOf(name);
    }
    /**
     * Translates each RNA secondary structure by the specified vectors.
     * @param translations - An array of translation vectors for each RNA
     * secondary structure.
     * @returns This RnaVis instance.
     * @throws An error if the length of the translations array does not match
     * the number of RNA secondary structures.
     */
    translate(translations) {
      if (translations.length !== this.layers.length) {
        throw new Error("translations.length !== this.layers.length");
      } else {
        this.layers.forEach((layer, index) => layer.data.translate(translations[index]));
      }
      return this;
    }
    /**
     * Gets the calculated alpha value based on the number of layers for
     * rendering the RNA secondary structures.
     * @returns The calculated alpha value.
     */
    getDefaultAlpha() {
      let visibleCount = this.layers.filter((l) => l.visible).length;
      visibleCount = visibleCount === 0 ? 1 : visibleCount;
      const alpha = 1 / visibleCount;
      return alpha;
    }
    /**
     * Set the global alpha value of the canvas context.
     * @param alpha - A number between 0 and 1 representing the opacity value.
     * @returns The RnaVis instance to allow for method chaining.
     */
    setAlpha(alpha) {
      this.canvas.getContext("2d").globalAlpha = alpha;
      return this;
    }
    /**
     * Set the visibility of a layer by its index.
     * @param index - The index of the layer to modify.
     * @param visibility - A boolean indicating whether the layer should be visible.
     * @returns The RnaVis instance to allow for method chaining.
     */
    setVisibility(index, visibility) {
      this.layers[index].visible = visibility;
      return this;
    }
    /**
     * Set the visibility of a layer by its name.
     * @param name - The name of the layer to modify.
     * @param visible - A boolean indicating whether the layer should be visible.
     * @returns The RnaVis instance to allow for method chaining.
     */
    setVisibilityByName(name, visible) {
      const index = this.getLayerIndex(name);
      if (index > -1) {
        this.setVisibility(index, visible);
      }
      return this;
    }
    /**
     * Set the visibility of all layers.
     * @param visible - A boolean indicating whether all layers should be visible.
     * @returns The RnaVis instance to allow for method chaining.
     */
    setAllVisibility(visible) {
      this.layers.forEach((layer) => layer.visible = visible);
      return this;
    }
    /**
     * Set the visibility of all numbering labels showing the order of residues.
     * @param visible - A boolean indicating whether all numbering labels
     * should be visible.
     * @returns The RnaVis instance to allow for method chaining.
     */
    numberingLabelsVisibility(visible) {
      this.layers.map((layer) => layer.data.labels).flat(1).forEach((label) => label.setVisible(visible));
      return this;
    }
    /**
     * Discards zooming and panning of the canvas.
     * @returns The RnaVis instance to allow for method chaining.
     */
    resetTransform() {
      select_default2(this.canvas).call(this.zoom.transform, identity3);
      return this;
    }
    /**
     * Get an array of DataContainer instances representing the data for each
     * layer.
     * @returns An array of DataContainer instances.
     */
    getDataContainers() {
      return this.layers.map((layer) => layer.data);
    }
  };

  // d.5.b.A.madurae.json
  var d_5_b_A_madurae_default = {
    classes: [
      {
        "font-family": "Helvetica",
        "font-size": "8.334300px",
        "font-weight": "bold",
        name: "font"
      },
      {
        name: "numbering-line",
        stroke: "rgb(204, 204, 204)",
        "stroke-width": 0.5209
      },
      {
        name: "bp-line",
        "stroke-width": 1.0418
      }
    ],
    rnaComplexes: [
      {
        name: "complex",
        rnaMolecules: [
          {
            basePairs: [
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 1,
                residueIndex2: 120
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 2,
                residueIndex2: 119
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 3,
                residueIndex2: 118
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 4,
                residueIndex2: 117
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 5,
                residueIndex2: 116
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 6,
                residueIndex2: 115
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 7,
                residueIndex2: 114
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 8,
                residueIndex2: 113
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 9,
                residueIndex2: 112
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 10,
                residueIndex2: 111
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 16,
                residueIndex2: 68
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 17,
                residueIndex2: 67
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 18,
                residueIndex2: 65
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 19,
                residueIndex2: 64
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 20,
                residueIndex2: 63
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 21,
                residueIndex2: 62
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 22,
                residueIndex2: 61
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 23,
                residueIndex2: 60
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 28,
                residueIndex2: 56
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 29,
                residueIndex2: 55
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 30,
                residueIndex2: 54
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 31,
                residueIndex2: 51
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 32,
                residueIndex2: 50
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 33,
                residueIndex2: 49
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 34,
                residueIndex2: 48
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 34,
                residueIndex2: 48
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 33,
                residueIndex2: 49
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 32,
                residueIndex2: 50
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 31,
                residueIndex2: 51
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 30,
                residueIndex2: 54
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 29,
                residueIndex2: 55
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 28,
                residueIndex2: 56
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 23,
                residueIndex2: 60
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 22,
                residueIndex2: 61
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 21,
                residueIndex2: 62
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 20,
                residueIndex2: 63
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 19,
                residueIndex2: 64
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 18,
                residueIndex2: 65
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 17,
                residueIndex2: 67
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 16,
                residueIndex2: 68
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 70,
                residueIndex2: 107
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 71,
                residueIndex2: 106
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 72,
                residueIndex2: 105
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 73,
                residueIndex2: 104
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 74,
                residueIndex2: 103
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 75,
                residueIndex2: 102
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 76,
                residueIndex2: 101
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 79,
                residueIndex2: 98
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 80,
                residueIndex2: 97
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 81,
                residueIndex2: 96
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 82,
                residueIndex2: 95
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 83,
                residueIndex2: 94
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 84,
                residueIndex2: 93
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 85,
                residueIndex2: 92
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 86,
                residueIndex2: 91
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 86,
                residueIndex2: 91
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 85,
                residueIndex2: 92
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 84,
                residueIndex2: 93
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 83,
                residueIndex2: 94
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 82,
                residueIndex2: 95
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 81,
                residueIndex2: 96
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 80,
                residueIndex2: 97
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 79,
                residueIndex2: 98
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 76,
                residueIndex2: 101
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 75,
                residueIndex2: 102
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 74,
                residueIndex2: 103
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 73,
                residueIndex2: 104
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 72,
                residueIndex2: 105
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 71,
                residueIndex2: 106
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 70,
                residueIndex2: 107
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 10,
                residueIndex2: 111
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 9,
                residueIndex2: 112
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 8,
                residueIndex2: 113
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 7,
                residueIndex2: 114
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 6,
                residueIndex2: 115
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 5,
                residueIndex2: 116
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 4,
                residueIndex2: 117
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 3,
                residueIndex2: 118
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 2,
                residueIndex2: 119
              },
              {
                basePairType: "canonical",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 1,
                residueIndex2: 120
              }
            ],
            labels: [
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "10",
                  x: 59.644747161332475,
                  y: 78.25430705107294
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 47.84805715473482,
                  x2: 54.64416713661325,
                  y1: 85.32144852967986,
                  y2: 81.25004623638867
                },
                residueIndex: 10
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "20",
                  x: 93.0583518020282,
                  y: 102.33914228786455
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 93.0583518020282,
                  x2: 93.0583518020282,
                  y1: 116.09073796947212,
                  y2: 106.50629230846391
                },
                residueIndex: 20
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "30",
                  x: 158.0583518020282,
                  y: 102.33914228786455
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 158.0583518020282,
                  x2: 158.0583518020282,
                  y1: 116.09073796947212,
                  y2: 106.50629230846391
                },
                residueIndex: 30
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "50",
                  x: 175.0583518020282,
                  y: 159.8434939037703
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 175.0583518020282,
                  x2: 175.0583518020282,
                  y1: 146.09189822216274,
                  y2: 155.67634388317094
                },
                residueIndex: 50
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "100",
                  x: 0,
                  y: 195.12852873661245
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 12.95679140544587,
                  x2: 7.5008697509765625,
                  y1: 199.7359076298847,
                  y2: 197.79580552531712
                },
                residueIndex: 100
              }
            ],
            name: "molecule",
            sequence: [
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 0,
                residueName: "5'",
                templateNumberingLabel: "",
                templateResidueIndex: 0,
                templateResidueName: "5'",
                x: 43.5583518020282,
                y: 7.891293096093477
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 1,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 1,
                templateResidueName: "C",
                x: 43.5583518020282,
                y: 15.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 2,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 2,
                templateResidueName: "G",
                x: 43.5583518020282,
                y: 23.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 3,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 3,
                templateResidueName: "U",
                x: 43.5583518020282,
                y: 31.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 4,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 4,
                templateResidueName: "U",
                x: 43.5583518020282,
                y: 39.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 5,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 5,
                templateResidueName: "C",
                x: 43.5583518020282,
                y: 47.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 6,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 6,
                templateResidueName: "G",
                x: 43.5583518020282,
                y: 55.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 7,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 7,
                templateResidueName: "G",
                x: 43.5583518020282,
                y: 63.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 8,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 8,
                templateResidueName: "U",
                x: 43.5583518020282,
                y: 71.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 9,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 9,
                templateResidueName: "G",
                x: 43.5583518020282,
                y: 79.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 10,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 10,
                templateResidueName: "G",
                x: 43.5583518020282,
                y: 87.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 11,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 11,
                templateResidueName: "U",
                x: 50.0583518020282,
                y: 90.74131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 12,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 12,
                templateResidueName: "U",
                x: 55.448351802028185,
                y: 95.12131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 13,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 13,
                templateResidueName: "U",
                x: 59.478351802028214,
                y: 100.79131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 14,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 14,
                templateResidueName: "U",
                x: 61.83835180202817,
                y: 107.33131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 15,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 15,
                templateResidueName: "G",
                x: 62.3683518020282,
                y: 114.26131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 16,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 16,
                templateResidueName: "G",
                x: 61.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 17,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 17,
                templateResidueName: "C",
                x: 69.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 18,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 18,
                templateResidueName: "G",
                x: 77.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 19,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 19,
                templateResidueName: "A",
                x: 85.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 20,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 20,
                templateResidueName: "G",
                x: 93.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 21,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 21,
                templateResidueName: "G",
                x: 101.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 22,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 22,
                templateResidueName: "G",
                x: 109.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 23,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 23,
                templateResidueName: "G",
                x: 117.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 24,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 24,
                templateResidueName: "G",
                x: 118.65835180202822,
                y: 112.69131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 25,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 25,
                templateResidueName: "A",
                x: 125.25835180202819,
                y: 107.19131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 26,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 26,
                templateResidueName: "A",
                x: 133.8583518020282,
                y: 107.19131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 27,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 27,
                templateResidueName: "A",
                x: 140.45835180202818,
                y: 112.59131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 28,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 28,
                templateResidueName: "C",
                x: 142.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 29,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 29,
                templateResidueName: "A",
                x: 150.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 30,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 30,
                templateResidueName: "C",
                x: 158.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 31,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 31,
                templateResidueName: "C",
                x: 167.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 32,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 32,
                templateResidueName: "C",
                x: 175.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 33,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 33,
                templateResidueName: "G",
                x: 183.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 34,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 34,
                templateResidueName: "G",
                x: 191.0583518020282,
                y: 121.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 35,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 35,
                templateResidueName: "U",
                x: 196.2583518020282,
                y: 114.39131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 36,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 36,
                templateResidueName: "C",
                x: 203.5583518020282,
                y: 110.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 37,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 37,
                templateResidueName: "C",
                x: 212.0583518020282,
                y: 108.79131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 38,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 38,
                templateResidueName: "C",
                x: 220.3583518020282,
                y: 110.79131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 39,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 39,
                templateResidueName: "A",
                x: 227.2583518020282,
                y: 115.59131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 40,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 40,
                templateResidueName: "U",
                x: 231.8583518020282,
                y: 122.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 41,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 41,
                templateResidueName: "U",
                x: 233.45835180202818,
                y: 131.19131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 42,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 42,
                templateResidueName: "C",
                x: 231.8583518020282,
                y: 139.59131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 43,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 43,
                templateResidueName: "C",
                x: 227.15835180202822,
                y: 146.59131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 44,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 44,
                templateResidueName: "G",
                x: 220.2583518020282,
                y: 151.59131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 45,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 45,
                templateResidueName: "A",
                x: 211.95835180202818,
                y: 153.49131809581746
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 46,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 46,
                templateResidueName: "A",
                x: 203.5583518020282,
                y: 152.19131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 47,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 47,
                templateResidueName: "C",
                x: 196.15835180202822,
                y: 147.79131809581742
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 48,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 48,
                templateResidueName: "C",
                x: 191.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 49,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 49,
                templateResidueName: "C",
                x: 183.0583518020282,
                y: 140.99131809581746
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 50,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 50,
                templateResidueName: "G",
                x: 175.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 51,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 51,
                templateResidueName: "G",
                x: 167.0583518020282,
                y: 140.99131809581746
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 52,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 52,
                templateResidueName: "A",
                x: 166.5583518020282,
                y: 149.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 53,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 53,
                templateResidueName: "A",
                x: 158.5583518020282,
                y: 149.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 54,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 54,
                templateResidueName: "G",
                x: 158.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 55,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 55,
                templateResidueName: "U",
                x: 150.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 56,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 56,
                templateResidueName: "U",
                x: 142.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 57,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 57,
                templateResidueName: "A",
                x: 137.5583518020282,
                y: 147.78131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 58,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 58,
                templateResidueName: "A",
                x: 129.6283518020282,
                y: 150.31131809581746
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 59,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 59,
                templateResidueName: "G",
                x: 121.6883518020282,
                y: 147.84131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 60,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 60,
                templateResidueName: "C",
                x: 117.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 61,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 61,
                templateResidueName: "C",
                x: 109.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 62,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 62,
                templateResidueName: "U",
                x: 101.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 63,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 63,
                templateResidueName: "C",
                x: 93.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 64,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 64,
                templateResidueName: "U",
                x: 85.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 65,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 65,
                templateResidueName: "C",
                x: 77.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 66,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 66,
                templateResidueName: "A",
                x: 73.0583518020282,
                y: 148.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 67,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 67,
                templateResidueName: "G",
                x: 69.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 68,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 68,
                templateResidueName: "C",
                x: 61.0583518020282,
                y: 141.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 69,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 69,
                templateResidueName: "G",
                x: 52.28835180202822,
                y: 142.00131809581745
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 70,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 70,
                templateResidueName: "C",
                x: 43.5583518020282,
                y: 146.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 71,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 71,
                templateResidueName: "C",
                x: 43.5583518020282,
                y: 154.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 72,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 72,
                templateResidueName: "G",
                x: 43.54835180202821,
                y: 162.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 73,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 73,
                templateResidueName: "A",
                x: 43.5583518020282,
                y: 170.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 74,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 74,
                templateResidueName: "U",
                x: 43.5583518020282,
                y: 178.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 75,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 75,
                templateResidueName: "G",
                x: 43.54835180202821,
                y: 186.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 76,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 76,
                templateResidueName: "G",
                x: 43.54835180202821,
                y: 194.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 77,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 77,
                templateResidueName: "U",
                x: 50.6183518020282,
                y: 201.16131809581742
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 78,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 78,
                templateResidueName: "A",
                x: 50.57835180202818,
                y: 211.11131809581747
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 79,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 79,
                templateResidueName: "C",
                x: 43.498351802028196,
                y: 218.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 80,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 80,
                templateResidueName: "U",
                x: 43.51835180202818,
                y: 226.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 81,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 81,
                templateResidueName: "G",
                x: 43.54835180202821,
                y: 234.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 82,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 82,
                templateResidueName: "C",
                x: 43.56835180202819,
                y: 242.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 83,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 83,
                templateResidueName: "A",
                x: 43.58835180202817,
                y: 250.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 84,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 84,
                templateResidueName: "U",
                x: 43.528351802028226,
                y: 258.0913180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 85,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 85,
                templateResidueName: "G",
                x: 43.50835180202819,
                y: 266.0913180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 86,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 86,
                templateResidueName: "G",
                x: 43.528351802028226,
                y: 274.0913180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 87,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 87,
                templateResidueName: "G",
                x: 43.66835180202821,
                y: 282.5413180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 88,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 88,
                templateResidueName: "A",
                x: 37.75835180202819,
                y: 288.58131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 89,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 89,
                templateResidueName: "G",
                x: 29.3083518020282,
                y: 288.5913180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 90,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 90,
                templateResidueName: "A",
                x: 23.38835180202821,
                y: 282.56131809581746
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 91,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 91,
                templateResidueName: "C",
                x: 23.528351802028197,
                y: 274.0913180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 92,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 92,
                templateResidueName: "U",
                x: 23.548351802028208,
                y: 266.0913180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 93,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 93,
                templateResidueName: "G",
                x: 23.518351802028207,
                y: 258.0913180958174
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 94,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 94,
                templateResidueName: "U",
                x: 23.5883518020282,
                y: 250.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 95,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 95,
                templateResidueName: "G",
                x: 23.56835180202819,
                y: 242.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 96,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 96,
                templateResidueName: "U",
                x: 23.53835180202819,
                y: 234.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 97,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 97,
                templateResidueName: "G",
                x: 23.5583518020282,
                y: 226.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 98,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 98,
                templateResidueName: "G",
                x: 23.53835180202819,
                y: 218.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 99,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 99,
                templateResidueName: "G",
                x: 17.658351802028193,
                y: 210.71131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 100,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 100,
                templateResidueName: "A",
                x: 17.668351802028212,
                y: 201.41131809581742
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 101,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 101,
                templateResidueName: "G",
                x: 23.56835180202819,
                y: 194.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 102,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 102,
                templateResidueName: "A",
                x: 23.56835180202819,
                y: 186.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 103,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 103,
                templateResidueName: "G",
                x: 23.5583518020282,
                y: 178.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 104,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 104,
                templateResidueName: "U",
                x: 23.5583518020282,
                y: 170.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 105,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 105,
                templateResidueName: "A",
                x: 23.56835180202819,
                y: 162.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 106,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 106,
                templateResidueName: "G",
                x: 23.5583518020282,
                y: 154.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 107,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 107,
                templateResidueName: "G",
                x: 23.5583518020282,
                y: 146.09131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 108,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 108,
                templateResidueName: "A",
                x: 8.288351802028188,
                y: 134.84131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 109,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 109,
                templateResidueName: "C",
                x: 2.5583518020281986,
                y: 116.91131809581742
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 110,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 110,
                templateResidueName: "A",
                x: 8.378351802028192,
                y: 99.02131809581743
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 111,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 111,
                templateResidueName: "C",
                x: 23.5583518020282,
                y: 87.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 112,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 112,
                templateResidueName: "C",
                x: 23.5583518020282,
                y: 79.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 113,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 113,
                templateResidueName: "G",
                x: 23.5583518020282,
                y: 71.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 114,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 114,
                templateResidueName: "C",
                x: 23.5583518020282,
                y: 63.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 115,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 115,
                templateResidueName: "C",
                x: 23.5583518020282,
                y: 55.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 116,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 116,
                templateResidueName: "G",
                x: 23.5583518020282,
                y: 47.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 117,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 117,
                templateResidueName: "G",
                x: 23.5583518020282,
                y: 39.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 118,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 118,
                templateResidueName: "A",
                x: 23.5583518020282,
                y: 31.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 119,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 119,
                templateResidueName: "C",
                x: 23.5583518020282,
                y: 23.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 120,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 120,
                templateResidueName: "U",
                x: 23.5583518020282,
                y: 15.89131809581744
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 121,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 121,
                templateResidueName: "U",
                x: 23.5583518020282,
                y: 7.891293096093477
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 122,
                residueName: "3'",
                templateNumberingLabel: "",
                templateResidueIndex: 122,
                templateResidueName: "3'",
                x: 24.872845342428974,
                y: 0
              }
            ]
          }
        ]
      }
    ]
  };

  // URS00000B9D9D.json
  var URS00000B9D9D_default = {
    classes: [
      {
        "font-family": "Helvetica",
        "font-size": "8.334300px",
        "font-weight": "bold",
        name: "font"
      },
      {
        name: "numbering-line",
        stroke: "rgb(204, 204, 204)",
        "stroke-width": 0.5209
      },
      {
        name: "bp-line",
        "stroke-width": 1.0418
      }
    ],
    rnaComplexes: [
      {
        name: "complex",
        rnaMolecules: [
          {
            basePairs: [
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 3,
                residueIndex2: 114
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 4,
                residueIndex2: 113
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 5,
                residueIndex2: 112
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 6,
                residueIndex2: 111
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 7,
                residueIndex2: 110
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 8,
                residueIndex2: 109
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 14,
                residueIndex2: 66
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 15,
                residueIndex2: 65
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 16,
                residueIndex2: 63
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 17,
                residueIndex2: 62
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 18,
                residueIndex2: 61
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 19,
                residueIndex2: 60
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 20,
                residueIndex2: 59
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 21,
                residueIndex2: 58
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 29,
                residueIndex2: 49
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 30,
                residueIndex2: 48
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 31,
                residueIndex2: 47
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 32,
                residueIndex2: 46
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 32,
                residueIndex2: 46
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 31,
                residueIndex2: 47
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 30,
                residueIndex2: 48
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 29,
                residueIndex2: 49
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 21,
                residueIndex2: 58
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 20,
                residueIndex2: 59
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 19,
                residueIndex2: 60
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 18,
                residueIndex2: 61
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 17,
                residueIndex2: 62
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 16,
                residueIndex2: 63
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 15,
                residueIndex2: 65
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 14,
                residueIndex2: 66
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 68,
                residueIndex2: 105
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 69,
                residueIndex2: 104
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 71,
                residueIndex2: 102
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 72,
                residueIndex2: 101
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 77,
                residueIndex2: 96
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 78,
                residueIndex2: 95
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 79,
                residueIndex2: 94
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 80,
                residueIndex2: 93
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 81,
                residueIndex2: 92
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 82,
                residueIndex2: 91
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 83,
                residueIndex2: 90
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 84,
                residueIndex2: 89
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 84,
                residueIndex2: 89
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 83,
                residueIndex2: 90
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 82,
                residueIndex2: 91
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 81,
                residueIndex2: 92
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 80,
                residueIndex2: 93
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 79,
                residueIndex2: 94
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 78,
                residueIndex2: 95
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 77,
                residueIndex2: 96
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 72,
                residueIndex2: 101
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 71,
                residueIndex2: 102
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 69,
                residueIndex2: 104
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 68,
                residueIndex2: 105
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 8,
                residueIndex2: 109
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 7,
                residueIndex2: 110
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 6,
                residueIndex2: 111
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 5,
                residueIndex2: 112
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 4,
                residueIndex2: 113
              },
              {
                basePairType: "null",
                classes: [
                  "bp-line"
                ],
                residueIndex1: 3,
                residueIndex2: 114
              }
            ],
            labels: [
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "10",
                  x: 66.44287173186768,
                  y: 82.40612430177524
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 56.40963712505834,
                  x2: 61.99702696466778,
                  y1: 91.81040987353086,
                  y2: 86.57327432237466
                },
                residueIndex: 10
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "20",
                  x: 106.37118826578342,
                  y: 102.44797419039088
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 106.37118826578342,
                  x2: 106.37118826578342,
                  y1: 116.19956987199845,
                  y2: 106.61512421099025
                },
                residueIndex: 20
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "30",
                  x: 180.37134051371328,
                  y: 102.43997403814296
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 180.37134051371328,
                  x2: 180.37134051371328,
                  y1: 116.19156971975053,
                  y2: 106.60712405874233
                },
                residueIndex: 30
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "50",
                  x: 177.44101367097062,
                  y: 161.07592665094393
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 169.68141423610376,
                  x2: 174.59287977571245,
                  y1: 149.72273324993023,
                  y2: 156.90877663034456
                },
                residueIndex: 50
              },
              {
                labelContent: {
                  classes: [
                    "font",
                    "numbering-label",
                    "sequential"
                  ],
                  label: "100",
                  x: 0,
                  y: 194.00393483315082
                },
                labelLine: {
                  classes: [
                    "numbering-line",
                    "sequential"
                  ],
                  x1: 12.12089358726351,
                  x2: 7.5008697509765625,
                  y1: 200.49934262917418,
                  y2: 198.02354011280158
                },
                residueIndex: 100
              }
            ],
            name: "molecule",
            sequence: [
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 0,
                residueName: "5'",
                templateNumberingLabel: "",
                templateResidueIndex: 0,
                templateResidueName: "5'",
                x: 40.87118826578342,
                y: 24.000074999171886
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 1,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 40.87118826578342,
                y: 32.00009999889585
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 2,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 40.87118826578342,
                y: 40.00012499861981
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 3,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 5,
                templateResidueName: "C",
                x: 40.87118826578342,
                y: 48.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 4,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 6,
                templateResidueName: "G",
                x: 40.87118826578342,
                y: 56.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 5,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 7,
                templateResidueName: "G",
                x: 40.87118826578342,
                y: 64.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 6,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 8,
                templateResidueName: "U",
                x: 40.87118826578342,
                y: 72.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 7,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 9,
                templateResidueName: "G",
                x: 40.87118826578342,
                y: 80.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 8,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 10,
                templateResidueName: "G",
                x: 40.87118826578342,
                y: 88.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 9,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 11,
                templateResidueName: "U",
                x: 47.37118826578342,
                y: 90.85014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 10,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 12,
                templateResidueName: "U",
                x: 52.7611882657834,
                y: 95.23014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 11,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 13,
                templateResidueName: "U",
                x: 56.79118826578343,
                y: 100.90014999834378
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 12,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 14,
                templateResidueName: "U",
                x: 59.15118826578339,
                y: 107.44014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 13,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 15,
                templateResidueName: "G",
                x: 59.68118826578342,
                y: 114.37014999834378
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 14,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 16,
                templateResidueName: "G",
                x: 58.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 15,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 17,
                templateResidueName: "C",
                x: 66.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 16,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 18,
                templateResidueName: "G",
                x: 74.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 17,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 19,
                templateResidueName: "A",
                x: 82.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 18,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 20,
                templateResidueName: "G",
                x: 90.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 19,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 21,
                templateResidueName: "G",
                x: 98.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 20,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 22,
                templateResidueName: "G",
                x: 106.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 21,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 23,
                templateResidueName: "G",
                x: 114.37118826578342,
                y: 121.20014999834376
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 22,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 24,
                templateResidueName: "G",
                x: 121.40234832478421,
                y: 118.84683431614195
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 23,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 25,
                templateResidueName: "A",
                x: 128.6203806053946,
                y: 117.15115850058896
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 24,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 26,
                templateResidueName: "A",
                x: 135.9639159048869,
                y: 116.12753953803781
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 25,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 27,
                templateResidueName: "A",
                x: 143.3705179679202,
                y: 115.78468044853412
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 26,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 150.77721433249116,
                y: 116.12549629094065
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 27,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 158.1210317348254,
                y: 117.14708937850395
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 28,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 165.33953152108518,
                y: 118.84077391558628
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 29,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 31,
                templateResidueName: "C",
                x: 172.37134051371328,
                y: 121.19214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 30,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 32,
                templateResidueName: "C",
                x: 180.37134051371328,
                y: 121.19214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 31,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 33,
                templateResidueName: "G",
                x: 188.37134051371328,
                y: 121.19214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 32,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 34,
                templateResidueName: "G",
                x: 196.37134051371328,
                y: 121.19214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 33,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 35,
                templateResidueName: "U",
                x: 201.57134051371327,
                y: 114.49214984609586
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 34,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 36,
                templateResidueName: "C",
                x: 208.87134051371328,
                y: 110.19214984609582
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 35,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 37,
                templateResidueName: "C",
                x: 217.37134051371328,
                y: 108.89214984609583
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 36,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 38,
                templateResidueName: "C",
                x: 225.6713405137133,
                y: 110.89214984609583
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 37,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 39,
                templateResidueName: "A",
                x: 232.57134051371327,
                y: 115.69214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 38,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 40,
                templateResidueName: "U",
                x: 237.1713405137133,
                y: 122.99214984609586
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 39,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 41,
                templateResidueName: "U",
                x: 238.77134051371326,
                y: 131.29214984609587
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 40,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 42,
                templateResidueName: "C",
                x: 237.1713405137133,
                y: 139.69214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 41,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 43,
                templateResidueName: "C",
                x: 232.4713405137133,
                y: 146.69214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 42,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 44,
                templateResidueName: "G",
                x: 225.57134051371327,
                y: 151.69214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 43,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 45,
                templateResidueName: "A",
                x: 217.27134051371326,
                y: 153.59214984609588
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 44,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 46,
                templateResidueName: "A",
                x: 208.87134051371328,
                y: 152.29214984609587
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 45,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 47,
                templateResidueName: "C",
                x: 201.4713405137133,
                y: 147.89214984609583
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 46,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 48,
                templateResidueName: "C",
                x: 196.37134051371328,
                y: 141.19214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 47,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 49,
                templateResidueName: "C",
                x: 188.37134051371328,
                y: 141.09214984609588
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 48,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 50,
                templateResidueName: "G",
                x: 180.37134051371328,
                y: 141.19214984609584
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 49,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 51,
                templateResidueName: "G",
                x: 172.37134051371328,
                y: 141.09214984609588
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 50,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 52,
                templateResidueName: "A",
                x: 166.85974178289945,
                y: 145.59429938624442
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 51,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 53,
                templateResidueName: "A",
                x: 160.6632224294783,
                y: 149.09433066525395
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 52,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 57,
                templateResidueName: "A",
                x: 153.96204335777742,
                y: 151.4904254255601
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 53,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 58,
                templateResidueName: "A",
                x: 146.95114636183155,
                y: 152.7128796633968
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 54,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 59,
                templateResidueName: "G",
                x: 139.83448313783595,
                y: 152.72613136501997
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 55,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 132.8190821925029,
                y: 151.52979502954076
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 56,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 126.10902624493639,
                y: 149.15867288340502
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 57,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 119.89951532344423,
                y: 145.68174246028212
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 58,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 60,
                templateResidueName: "C",
                x: 114.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 59,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 61,
                templateResidueName: "C",
                x: 106.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 60,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 62,
                templateResidueName: "U",
                x: 98.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 61,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 63,
                templateResidueName: "C",
                x: 90.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 62,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 64,
                templateResidueName: "U",
                x: 82.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 63,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 65,
                templateResidueName: "C",
                x: 74.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 64,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 66,
                templateResidueName: "A",
                x: 70.37118826578342,
                y: 148.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 65,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 67,
                templateResidueName: "G",
                x: 66.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 66,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 68,
                templateResidueName: "C",
                x: 58.37118826578342,
                y: 141.20014999834376
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 67,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 69,
                templateResidueName: "G",
                x: 49.703867504664686,
                y: 155.75004264249526
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 68,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 73,
                templateResidueName: "A",
                x: 40.87118826578342,
                y: 170.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 69,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 74,
                templateResidueName: "U",
                x: 40.87118826578342,
                y: 178.20014999834376
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 70,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 41.84273825645937,
                y: 183.7010502689069
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 71,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 75,
                templateResidueName: "G",
                x: 40.861188265783426,
                y: 189.20017499806772
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 72,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 76,
                templateResidueName: "G",
                x: 40.861188265783426,
                y: 197.20017499806772
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 73,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 77,
                templateResidueName: "U",
                x: 45.1949983019889,
                y: 202.87579146121323
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 74,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 78,
                templateResidueName: "A",
                x: 47.47573549931559,
                y: 209.6428269645466
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 75,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 47.46160221153622,
                y: 216.78385853686302
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 76,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 45.15409681194973,
                y: 223.5418131458792
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 77,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 79,
                templateResidueName: "C",
                x: 40.79785483985938,
                y: 229.20023055247282
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 78,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 80,
                templateResidueName: "U",
                x: 40.817854839859365,
                y: 237.20023055247282
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 79,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 81,
                templateResidueName: "G",
                x: 40.847854839859394,
                y: 245.20023055247282
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 80,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 82,
                templateResidueName: "C",
                x: 40.867854839859376,
                y: 253.20023055247282
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 81,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 83,
                templateResidueName: "A",
                x: 40.88785483985936,
                y: 261.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 82,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 84,
                templateResidueName: "U",
                x: 40.82785483985941,
                y: 269.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 83,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 85,
                templateResidueName: "G",
                x: 40.807854839859374,
                y: 277.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 84,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 86,
                templateResidueName: "G",
                x: 40.82785483985941,
                y: 285.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 85,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 87,
                templateResidueName: "G",
                x: 40.9678548398594,
                y: 293.6502305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 86,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 88,
                templateResidueName: "A",
                x: 35.057854839859374,
                y: 299.6902305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 87,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 89,
                templateResidueName: "G",
                x: 26.607854839859385,
                y: 299.7002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 88,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 90,
                templateResidueName: "A",
                x: 20.687854839859426,
                y: 293.67023055247284
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 89,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 91,
                templateResidueName: "C",
                x: 20.827854839859413,
                y: 285.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 90,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 92,
                templateResidueName: "U",
                x: 20.847854839859423,
                y: 277.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 91,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 93,
                templateResidueName: "G",
                x: 20.81785483985942,
                y: 269.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 92,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 94,
                templateResidueName: "U",
                x: 20.887854839859415,
                y: 261.2002305524728
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 93,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 95,
                templateResidueName: "G",
                x: 20.867854839859405,
                y: 253.20023055247282
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 94,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 96,
                templateResidueName: "U",
                x: 20.837854839859403,
                y: 245.20023055247282
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 95,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 97,
                templateResidueName: "G",
                x: 20.857854839859414,
                y: 237.20023055247282
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 96,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 98,
                templateResidueName: "G",
                x: 20.837854839859403,
                y: 229.20023055247282
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 97,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 99,
                templateResidueName: "G",
                x: 16.500505902049298,
                y: 223.52732873206537
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 98,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 100,
                templateResidueName: "A",
                x: 14.215543885334,
                y: 216.76172754263126
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 99,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 14.22521403474883,
                y: 209.62069698951677
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 100,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 16.52849114825659,
                y: 202.86130904306066
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 101,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 101,
                templateResidueName: "G",
                x: 20.881188265783408,
                y: 197.20017499806772
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 102,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 102,
                templateResidueName: "A",
                x: 20.881188265783408,
                y: 189.20017499806772
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 103,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 19.899638275107463,
                y: 183.7010502689069
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 104,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 103,
                templateResidueName: "G",
                x: 20.871188265783417,
                y: 178.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 105,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 104,
                templateResidueName: "U",
                x: 20.871188265783417,
                y: 170.20014999834376
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 106,
                residueName: "U",
                templateNumberingLabel: "",
                templateResidueIndex: 108,
                templateResidueName: "A",
                x: 20.44470854365852,
                y: 149.65211682237123
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 107,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 109,
                templateResidueName: "C",
                x: 20.30253956589911,
                y: 129.10014999834294
              },
              {
                classes: [
                  "text-blue",
                  "font"
                ],
                info: "",
                residueIndex: 108,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: 110,
                templateResidueName: "A",
                x: 20.44470854365852,
                y: 108.54818317431466
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 109,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 111,
                templateResidueName: "C",
                x: 20.871188265783417,
                y: 88.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 110,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 112,
                templateResidueName: "C",
                x: 20.871188265783417,
                y: 80.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 111,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 113,
                templateResidueName: "G",
                x: 20.871188265783417,
                y: 72.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 112,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 114,
                templateResidueName: "C",
                x: 20.871188265783417,
                y: 64.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 113,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: 115,
                templateResidueName: "C",
                x: 20.871188265783417,
                y: 56.00014999834377
              },
              {
                classes: [
                  "text-black",
                  "font"
                ],
                info: "",
                residueIndex: 114,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 116,
                templateResidueName: "G",
                x: 20.871188265783417,
                y: 48.00014999834377
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 115,
                residueName: "G",
                templateNumberingLabel: "",
                templateResidueIndex: 121,
                templateResidueName: "U",
                x: 20.871188265783417,
                y: 40.00012499861981
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 116,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 20.871188265783417,
                y: 32.00009999889585
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 117,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 20.871188265783417,
                y: 24.000074999171886
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 118,
                residueName: "C",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 20.871188265783417,
                y: 16.000049999447924
              },
              {
                classes: [
                  "text-red",
                  "font"
                ],
                info: "",
                residueIndex: 119,
                residueName: "A",
                templateNumberingLabel: "",
                templateResidueIndex: -1,
                templateResidueName: "",
                x: 20.871188265783417,
                y: 8.000024999723962
              },
              {
                classes: [
                  "text-green",
                  "font"
                ],
                info: "",
                residueIndex: 120,
                residueName: "3'",
                templateNumberingLabel: "",
                templateResidueIndex: 122,
                templateResidueName: "3'",
                x: 20.871188265783417,
                y: 0
              }
            ]
          }
        ]
      }
    ]
  };

  // tutorial.ts
  var canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  document.body.appendChild(canvas);
  var rnaVis = new RnaVis(canvas);
  rnaVis.addLayer(d_5_b_A_madurae_default, "d.5.b.A.madurae").addLayer(URS00000B9D9D_default, "URS00000B9D9D");
  rnaVis.draw();
  rnaVis.addZoom();
  var bestTranslations = rnaVis.align();
  rnaVis.translate(bestTranslations).draw();
  var templateResidue = rnaVis.layers[0].data.residues[42];
  var translationsToResidue = rnaVis.getAlignmentToTempResidue(templateResidue);
  rnaVis.translate(translationsToResidue).draw();
  rnaVis.layers.forEach(
    (l) => l.mappingLines.forEach(
      (m) => m.setVisible(true)
    )
  );
  rnaVis.draw();
})();
